import os

# Set AWS RDS MySQL database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'predictiondb',
        'USER': os.environ.get('AWS_RDS_USER'),
        'PASSWORD': os.environ.get('AWS_RDS_PASSWORD'),
        'HOST': os.environ.get('AWS_RDS_HOST'),
        'PORT': '3306',
    }
}


##  (CORS) Cross-Origin Resource Sharing Settings ##
CORS_ORIGIN_ALLOW_ALL = True