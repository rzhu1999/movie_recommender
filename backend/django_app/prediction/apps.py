from django.apps import AppConfig
import pandas as pd
from joblib import load
import os


class PredictionConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'prediction'


# from django.apps import AppConfig
# from django.apps.config import MODELS_MODULE_NAME
# import pandas as pd
# from joblib import load
# import os

# from backend.django_app.mainapp.settings import BASE_DIR


# class PredictionConfig(AppConfig):
#     name = 'prediction'
#     BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
#     MLMODEL_FOLDER = os.path.join(BASE_DIR, 'prediction/mlmodel/')
#     MLMODEL_FILE = os.path.join(MLMODEL_FOLDER, "")
#     mlmodel = load(MLMODEL_FILE)
    
 
