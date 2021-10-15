from django.urls import path
from django.urls.resolvers import URLPattern
import prediction.views as views

urlpatterns = [
    path('add/', views.api_add, name = 'api_add'),
    path('add_values/', views.Add_Values.as_view(), name = 'api_add_values'),
]