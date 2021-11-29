# from django.http import HttpResponse
from .models import Simrec
from .serializer import SimrecSerializer
# from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
# from rest_framework.views import APIView
# from rest_framework.authentication import TokenAuthentication
# from rest_framework.permissions import IsAuthenticated
import os
import pandas as pd
import boto3

# @api_view(['POST'])
# def simrec(request):
# 	number = int(request.data['num'])
# 	simrec = Simrec.objects.all()[:number]
# 	serializer = SimrecSerializer(simrec, many=True)
# 	return Response(serializer.data, status=200)

# @api_view(['GET'])
# def explore(request):
# 	simrec = Simrec.objects.all()
# 	serializer = SimrecSerializer(simrec, many=True)
# 	return Response(serializer.data, status=200)


AWS_STORAGE_BUCKET_NAME = os.environ.get('AWS_STORAGE_BUCKET_NAME')
AWS_ACCESS_KEY_ID = os.environ.get("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.environ.get("AWS_SECRET_ACCESS_KEY")
AWS_SESSION_TOKEN = os.environ.get("AWS_SESSION_TOKEN")

s3_client = boto3.client(
	"s3",
	aws_access_key_id=AWS_ACCESS_KEY_ID,
	aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
	aws_session_token=AWS_SESSION_TOKEN,
)

response = s3_client.get_object(
	Bucket=AWS_STORAGE_BUCKET_NAME, 
	Key="datasets/metadata_tr.csv")

status = response.get("ResponseMetadata", {}).get("HTTPStatusCode")

if status == 200:
	print(f"Successful S3 get_object response. Status - {status}")
	metadata = pd.read_csv(response.get("Body"), index_col=0)
	# print(metadata)
else:
	print(f"Unsuccessful S3 get_object response. Status - {status}")

# 2. feature extraction
metadata['tmdbId'] = metadata['tmdbId'].astype('str')
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
        return movie_score_sorted[['id','title','overview',
		'release_date','genres','vote_average' ,'vote_count', 'tmdbId']].head(n).to_dict('records')

# 3.view settings for recommender
@api_view(['GET', 'POST'])
def simrec(request):
	
	result_dict = {}
	if request.method == 'GET':
		result_dict = get_top_recommendations(200, movie_score_sorted=movie_cp)
		return Response(result_dict, status=200)
	elif request.method == 'POST':
		# get input title
		n = int(request.data['num'])
		result_dict = get_top_recommendations(n, movie_score_sorted=movie_cp)
		return Response(result_dict, status=200)

@api_view(['GET', 'POST'])
def explore(request):
	
	result_dict = {}
	if request.method == 'GET':
		result_dict = get_top_recommendations(200, movie_score_sorted=movie_cp)
		return Response(result_dict, status=200)