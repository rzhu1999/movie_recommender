from django.apps import AppConfig
import pandas as pd
import os
import awswrangler as wr


class ContentrecConfig(AppConfig):
	default_auto_field = 'django.db.models.BigAutoField'
	name = 'contentrec'
	
	# host = os.environ.get('AWS_RDS_HOST')
	# username = os.environ.get('AWS_RDS_USER')
	# password = os.environ.get('AWS_RDS_PASSWORD')
	# dbname = 'predictiondb'
	# connection = pymysql.connect(host=host, user=username, password=password, database=dbname)
	raw_s3_bucket
	
	metadata = pd.read_sql_query("SELECT * from Mbase", connection)