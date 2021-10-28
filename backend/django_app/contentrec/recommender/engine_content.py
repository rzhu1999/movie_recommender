import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
import pymysql
# import time
import os
from ast import literal_eval


host = os.environ.get('AWS_RDS_HOST')
username = os.environ.get('AWS_RDS_USER')
password = os.environ.get('AWS_RDS_PASSWORD')
dbname = 'predictiondb'

connection = pymysql.connect(host=host, user=username, password=password, database=dbname)
metadata = pd.read_sql_query("SELECT * from Metabase", connection)


features = ['cast', 'crew', 'keywords', 'genres']

for f in features:
    metadata[f] = metadata[f].apply(literal_eval)


def get_director(crew):
    for i in crew:
        if i['job'] == 'Director':
            return i['name']
    return np.nan

def get_top_n_element(cast, n):
    if isinstance(cast, list):
        names = [i['name'] for i in cast]
        if len(names) > n:
            names = names[:n]
        return names

    return [] # If missing

metadata['director'] = metadata['crew'].apply(get_director)

for f in features:
    metadata[f] = metadata[f].apply(get_top_n_element, n=3)

def clean(x):
    if isinstance(x, list): # remove space from lists of elements
        return [str.lower(i.replace(" ", "")) for i in x]
    else: # remove space from director name
        if isinstance(x, str): # check if the director exists
            return str.lower(x.replace(" ", ""))
        else: 
            return ''
features = ['cast', 'keywords', 'director', 'genres']
for f in features:
    metadata[f] = metadata[f].apply(clean)

def create_soup(x):
    return ' '.join(x['keywords']) + ' ' + ' '.join(x['cast']) + ' ' + x['director'] + ' ' + ' '.join(x['genres'])

# Create a new soup feature
metadata['soup'] = metadata.apply(create_soup, axis=1)
metadata['soup'] = metadata['soup'].fillna('')
count = CountVectorizer(stop_words='english')

count_matrix = count.fit_transform(metadata['soup'])
cosine_sim2 = cosine_similarity(count_matrix, count_matrix)
# Reset index of your main DataFrame and construct reverse mapping as before
metadata = metadata.reset_index()
indices = pd.Series(metadata.index, index=metadata['title'])

# Function that takes in movie title as input and outputs most similar movies
def get_similar_recommendations(title, n, metadata, cosine_sim):
    
    #Formatting
    title = " ".join(w.capitalize() for w in title.split())

    if not (metadata['title'] == title).any():
        print('Movie not found, please use a valid name')
    elif (n < 1 or n > len(metadata.index)):
        print("Please enter a valid number between 1 and {}".format(len(metadata.index)))
    else:
        # Get the index of the movie that matches the title
        idx = indices[title]

        # Get the pairwsie similarity scores of all movies with that movie
        sim_scores = list(enumerate(cosine_sim[idx]))

        # Sort the movies based on the similarity scores (the second element in each tuple)
        sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

        # Get the scores of the 10 most similar movies
        sim_scores = sim_scores[1:n]

        # Get the movie indices
        movie_indices = [i[0] for i in sim_scores]

        # Return the top 10 most similar movies
        return metadata[['id','title','director']].iloc[movie_indices].to_dict('records')

output = get_similar_recommendations('Cutthroat Island', 10, metadata, cosine_sim2)

connection.close()


        