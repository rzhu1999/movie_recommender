from django.urls import path
from django.urls.resolvers import URLPattern
import prediction.views as views

urlpatterns = [
    path("predict/", views.simlar_recommend.as_view(), name="simlar_recommend"),
]
