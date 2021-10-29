from django.shortcuts import render
from django.http import response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
import numpy as np
import pandas as pd
import pymysql
import os

from . import content_based as cb


class simlar_recommend(APIView):
    def post(self, request, format=None):
        host = os.environ.get("AWS_RDS_HOST")
        username = os.environ.get("AWS_RDS_USER")
        password = os.environ.get("AWS_RDS_PASSWORD")
        dbname = "predictiondb"

        connection = pymysql.connect(
            host=host, user=username, password=password, database=dbname
        )

        metadata = pd.read_sql_query("SELECT * from Metabase", connection)

        indices, matrix = cb.calculate_cos_sim_matrix(metadata)
        result = cb.get_similar_recommendations(
            title=request.data["title"],
            n=request.data["num"],
            metadata=metadata,
            cosine_sim=matrix,
            indices=indices,
        )
        if result:
            return Response(result, status=200)
        else:
            return Response("Movie not found, please try another name", status=400)


# # Function based view to add numbers
# @api_view(["GET", "POST"])
# def api_add(request):
#     sum = 0
#     response_dict = []
#     if request.method == "GET":
#         # Do nothing for now
#         pass
#     elif request.method == "POST":
#         # Add the numbers
#         data = request.data
#         for key in data:
#             sum += data[key]
#         response_dict = {"sum": sum}
#     return Response(response_dict, status=status.HTTP_201_CREATED)

# # Class based view to add numbers
# class Add_Values(APIView):
#     def post(self, request, format=None):
#         sum = 0
#         # Add the numbers
#        # Add the numbers
#         data = request.data
#         for key in data:
#             sum += data[key]
#         response_dict = {"sum": sum}
#         return Response(response_dict, status=status.HTTP_201_CREATED)
