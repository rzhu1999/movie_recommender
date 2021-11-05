# from django.http import HttpResponse
from .models import Simrec
from .serializer import SimrecSerializer
# from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
# from rest_framework.views import APIView
# from rest_framework.authentication import TokenAuthentication
# from rest_framework.permissions import IsAuthenticated
# from django.shortcuts import render

@api_view(['POST'])
def simrec(request):
	number = int(request.data['num'])
	simrec = Simrec.objects.all()[:number]
	serializer = SimrecSerializer(simrec, many=True)
	return Response(serializer.data, status=200)

@api_view(['GET'])
def explore(request):
	simrec = Simrec.objects.all()
	serializer = SimrecSerializer(simrec, many=True)
	return Response(serializer.data, status=200)
