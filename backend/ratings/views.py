# from django.shortcuts import render
import os
import boto3
import pandas as pd
# from pandas.core.frame import DataFrame

# from pyspark.ml.recommendation import ALSModel
from rest_framework.decorators import api_view
from rest_framework.response import Response

AWS_STORAGE_BUCKET_NAME = os.environ.get("AWS_STORAGE_BUCKET_NAME")
AWS_ACCESS_KEY_ID = os.environ.get("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.environ.get("AWS_SECRET_ACCESS_KEY")
AWS_SESSION_TOKEN = os.environ.get("AWS_SESSION_TOKEN")

s3_client = boto3.client(
    "s3",
    aws_access_key_id=AWS_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    aws_session_token=AWS_SESSION_TOKEN,
)

# model_path = "als_model"

response = s3_client.get_object(
    Bucket=AWS_STORAGE_BUCKET_NAME, Key="datasets/rate_pred.csv"
)

status = response.get("ResponseMetadata", {}).get("HTTPStatusCode")

if status == 200:
    print(f"Successful S3 get_object response. Status - {status}")
    rating_pred = pd.read_csv(response.get("Body"), index_col=0)
else:
    print(f"Unsuccessful S3 get_object response. Status - {status}")


def get_rating_recommendations(rating_pred, userId):
    target = rating_pred[rating_pred.userId.eq(userId)].sort_values(
        by=["prediction"], ascending=False
    )[["movieId", "prediction"]]

    movie_id_res_dict = target.set_index("movieId").T.to_dict("index")["prediction"]

    return movie_id_res_dict


# view settings for recommender
@api_view(["GET", "POST"])
def home(request):

    result_list = []
    if request.method == "GET":
        # Do nothing
        pass
    elif request.method == "POST":
        # get input title
        userId = request.data["id"]
        movie_id_res_dict = get_rating_recommendations(rating_pred, userId)

    return Response(movie_id_res_dict, status=200)
