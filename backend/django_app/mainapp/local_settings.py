# Set AWS RDS MySQL database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'predictiondb',
        'USER': 'admin',
        'PASSWORD': 'Dsci-551',
        'HOST': 'databasemovie.cgxw2jw7zt3d.us-east-1.rds.amazonaws.com',
        'PORT': '3306',
    }
}


##  (CORS) Cross-Origin Resource Sharing Settings ##
CORS_ORIGIN_ALLOW_ALL = True