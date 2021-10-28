from django.urls import path
import prediction.views as views


urlpatterns = [
    path('predict/', views.IRIS_Model_Predict.as_view(), name='api_predict'),
    path('add/', views.api_add, name='api_add'),
]
