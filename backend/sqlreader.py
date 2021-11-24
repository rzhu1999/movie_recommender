import pandas as pd
import os
import pymysql

host = os.environ.get('AWS_RDS_HOST')
username = os.environ.get('AWS_RDS_USER')
password = os.environ.get('AWS_RDS_PASSWORD')
dbname = 'predictiondb'
connection = pymysql.connect(host=host, user=username, password=password, database=dbname)
metadata = pd.read_sql_query("SELECT * from Mbase", connection)
metadata.to_csv('movie_meta.csv')
