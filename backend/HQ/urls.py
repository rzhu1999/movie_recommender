from django.urls import path
from . import views

urlpatterns = [
    path('manage/', views.home, name='HQ-home'),
    path('about/', views.about, name='HQ-about'),
]
