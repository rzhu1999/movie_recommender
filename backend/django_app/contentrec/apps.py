from django.apps import AppConfig
import pandas as pd
from joblib import load
import os
import pymysql


class ContentrecConfig(AppConfig):
	default_auto_field = 'django.db.models.BigAutoField'
	name = 'contentrec'
	
	host = os.environ.get('AWS_RDS_HOST')
	username = os.environ.get('AWS_RDS_USER')
	password = os.environ.get('AWS_RDS_PASSWORD')
	dbname = 'predictiondb'

	connection = pymysql.connect(host=host, user=username, password=password, database=dbname)
	metadata = pd.read_sql_query("SELECT * from Base", connection)