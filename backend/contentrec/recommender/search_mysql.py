import mysql.connector


def search_mysql(sql_query, return_type, column_list):
	'''argument example:
	# sql_query="select * from simple limit 20"
	# return_type = 'dict_list'
	# column_list = ['a', 'b', 'c', 'd', 'e']
	# print(search_mysql(sql_query, return_type, column_list))
	'''
	cnx = mysql.connector.connect(user="admin", password="Dsci-551", host="databasemovie.cgxw2jw7zt3d.us-east-1.rds.amazonaws.com", database="predictiondb")
	cursor = cnx.cursor()
	cursor.execute(sql_query)
	
	if return_type == 'data_list':
		return_list = []
		for row in cursor:
			return_list.append(row)
		return return_list
	if return_type == 'dict_list':
		return_list = []
		for row in cursor:
			item_dict = dict(zip(column_list, list(row)))
			return_list.append(item_dict)
		return return_list
	cursor.close()
	cnx.close()	

sql_query="select * from simrec_simrec "
return_type = 'dict_list'
column_list = ['a', 'b', 'c', 'd', 'e']
print(search_mysql(sql_query, return_type, column_list))
