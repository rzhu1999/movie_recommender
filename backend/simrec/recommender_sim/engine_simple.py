import pandas as pd

metadata = pd.read_csv('./data/movies_metadata.csv', low_memory=False)
R_avg = metadata['vote_average'].mean()
V_min = metadata['vote_count'].quantile(0.9)    # Choose first 90% movies
movie_cp = metadata.copy().loc[metadata['vote_count'] >= V_min]


def weighted_rating(df, V_min=V_min, R_avg=R_avg):
    V = df['vote_count']
    R = df['vote_average']

    # Calculation based on the IMDB formula
    return (V/(V+V_min) * R) + (V_min/(V_min+V) * R_avg)


# Define a new feature 'score' and calculate its value with `weighted_rating()`
movie_cp['weighted_score'] = movie_cp.apply(weighted_rating, axis=1)


#Sort movies based on score calculated above
movie_cp = movie_cp.sort_values('weighted_score', ascending=False)

def get_top_recommendations(n, movie_score_sorted=movie_cp):
    if (n < 1 or n > len(movie_score_sorted.index)):
        print("Please enter a valid number between 1 and {}".format(len(movie_score_sorted.index)))
    else:
        #Print the top 15 movies
        print(movie_score_sorted[['title', 'vote_count', 'vote_average', 'weighted_score']].head(20))

# get_top_recommendations(10)
        