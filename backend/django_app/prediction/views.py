from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from prediction.apps import PredictionConfig
import pandas as pd

from django.shortcuts import render


# Method-1 Decorator - @api_view
@api_view(['GET', 'POST', 'PUT'])
def api_add(request):
    sum = 0
    response_dict = {}
    if request.method == 'GET':
        # Do nothing
        pass
    elif request.method == 'POST':
        # Add the numbers
        data = request.data
        for num in data:
            sum += data[num]
        response_dict = {"sum": sum}
    return Response(response_dict, status=status.HTTP_201_CREATED)


# Method-2 APIView
# Class based view to predict based on IRIS model
class IRIS_Model_Predict(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        data = request.data
        keys = []
        values = []

        for key in data:
            keys.append(key)
            values.append(data[key])

        X = pd.Series(values).to_numpy().reshape(1, -1)

        loaded_mlmodel = PredictionConfig.mlmodel

        y_pred = loaded_mlmodel.predict(X)
        y_pred = pd.Series(y_pred)
        target_map = {0: 'setosa', 1: 'versicolor', 2: 'virginica'}
        y_pred = y_pred.map(target_map).to_numpy()

        response_dict = {"Predicted Iris Species": y_pred[0]}
        return Response(response_dict, status=200)
