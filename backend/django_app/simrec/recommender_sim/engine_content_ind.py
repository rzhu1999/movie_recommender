import pandas as pd
#Import TfIdfVectorizer from scikit-learn
from sklearn.feature_extraction.text import TfidfVectorizer
# Import linear_kernel
from sklearn.metrics.pairwise import linear_kernel
from joblib import dump, load

metadata = pd.read_csv('/Users/hw/Documents/my/test2/movie_recommender/engine/data/movies_metadata.csv', low_memory=False)

#Define a TF-IDF Vectorizer Object. Remove all english stop words such as 'the', 'a'
tfidf = TfidfVectorizer(stop_words='english')

#Replace NaN with an empty string
metadata['overview'] = metadata['overview'].fillna('')

#Construct the required TF-IDF matrix by fitting and transforming the data
tfidf_matrix = tfidf.fit_transform(metadata['overview'])

# Compute the cosine similarity matrix
# cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)

# identify the index of a movie in your metadata DataFrame, given its title.
indices = pd.Series(metadata.index, index=metadata['title']).drop_duplicates()

dump(metadata, 'metadata.joblib') 

# dump(cosine_sim, 'contentRec.joblib') 

# Function that takes in movie title as input and outputs most similar movies
# def get_similar_recommendations(title, n, metadata=metadata, cosine_sim=cosine_sim):
    
#     #Formatting
#     title = " ".join(w.capitalize() for w in title.split())

#     if not (metadata['title'] == title).any():
#         print('Movie not found, please use a valid name')
#     elif (n < 1 or n > len(metadata.index)):
#         print("Please enter a valid number between 1 and {}".format(len(metadata.index)))
#     else:
#         # Get the index of the movie that matches the title
#         idx = indices[title]

#         # Get the pairwsie similarity scores of all movies with that movie
#         sim_scores = list(enumerate(cosine_sim[idx]))

#         # Sort the movies based on the similarity scores (the second element in each tuple)
#         sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

#         # Get the scores of the 10 most similar movies
#         sim_scores = sim_scores[1:n]

#         # Get the movie indices
#         movie_indices = [i[0] for i in sim_scores]

#         # Return the top 10 most similar movies
#         return metadata['title'].iloc[movie_indices]


# get_similar_recommendations("Schindler's List", 10)
        