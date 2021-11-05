from django.urls import path
from . import views

urlpatterns = [
    path('', views.simrec, name='simple'),
    path('explore/', views.explore, name='explore'),
]
