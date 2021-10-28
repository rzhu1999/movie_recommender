from django.http import HttpResponse
from .models import Simrec
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
# from rest_framework.views import APIView

# from rest_framework.authentication import TokenAuthentication
# from rest_framework.permissions import IsAuthenticated

# from simrec.apps import simrecConfig
import pandas as pd

from django.shortcuts import render


# Method-1 Decorator - @api_view
@api_view(['GET', 'POST'])
def home(request):
	
	response_list = []
	if request.method == 'GET':
		# Do nothing
		pass
	elif request.method == 'POST':
		# input the numbers
		number = request.data['num']
		for row in Simrec.objects.all():
			if row.id <= int(number):
				response_list.append( { 'id': row.id,
					'title': row.title,
					'vote_count': row.vote_count,
					'vote_average': row.vote_average,
					'weighted_score': row.weighted_score
				} )
	return Response(response_list, status=status.HTTP_201_CREATED)

# def home(request):
# 	context = {'rec':Simrec.objects.all()}
# 	return render(request, 'simple.html', context)