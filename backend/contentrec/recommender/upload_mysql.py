from sqlalchemy import create_engine
import pandas as pd

def upload_mysql(df, table_name):
	# Credentials to database connection
	hostname="databasemovie.cgxw2jw7zt3d.us-east-1.rds.amazonaws.com"
	dbname="predictiondb"
	uname="admin"
	pwd="Dsci-551"

	# Create SQLAlchemy engine to connect to MySQL Database
	engine = create_engine("mysql+pymysql://{user}:{pw}@{host}/{db}"
					.format(host=hostname, db=dbname, user=uname, pw=pwd))

	# Convert dataframe to sql table                                   
	df.to_sql(table_name, engine, index=False)

if __name__ == '__main__':
	df = pd.read_csv('/Users/hw/Downloads/credits.csv', low_memory=False)
	upload_mysql(df, 'Credits')
