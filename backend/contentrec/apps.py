from django.apps import AppConfig
import pandas as pd
import os
import boto3

class ContentrecConfig(AppConfig):
	default_auto_field = 'django.db.models.BigAutoField'
	name = 'contentrec'
	
	# SQL query
	# host = os.environ.get('AWS_RDS_HOST')
	# username = os.environ.get('AWS_RDS_USER')
	# password = os.environ.get('AWS_RDS_PASSWORD')
	# dbname = 'predictiondb'
	# connection = pymysql.connect(host=host, user=username, password=password, database=dbname)
		# metadata = pd.read_sql_query("SELECT * from Mbase", connection)

	# Read from s3
	AWS_STORAGE_BUCKET_NAME = os.environ.get('AWS_STORAGE_BUCKET_NAME')
	AWS_ACCESS_KEY_ID = os.environ.get("AWS_ACCESS_KEY_ID")
	AWS_SECRET_ACCESS_KEY = os.environ.get("AWS_SECRET_ACCESS_KEY")
	AWS_SESSION_TOKEN = os.environ.get("AWS_SESSION_TOKEN")

	s3_client = boto3.client(
		"s3",
		aws_access_key_id=AWS_ACCESS_KEY_ID,
		aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
		aws_session_token=AWS_SESSION_TOKEN,
	)

	response = s3_client.get_object(
		Bucket=AWS_STORAGE_BUCKET_NAME, 
		Key="datasets/movie_meta.csv")

	status = response.get("ResponseMetadata", {}).get("HTTPStatusCode")

	if status == 200:
		print(f"Successful S3 get_object response. Status - {status}")
		metadata = pd.read_csv(response.get("Body"), index_col=0)
		# print(metadata)
	else:
		print(f"Unsuccessful S3 get_object response. Status - {status}")