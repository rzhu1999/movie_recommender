# movie_recommender

## Backend — Django, Django REST framework

the main app which would serve our Django application. However, all other functionality would be performed by other custom apps we create, such as the prediction app in our case. We would add another app called ‘users’ later on.

```
movie_recommender/backend
└───django_app
│ manage.py
│
├───mainapp
│ asgi.py
│ settings.py
│ urls.py
│ wsgi.py
│ **init**.py
│
└───prediction
admin.py
apps.py
models.py
tests.py
views.py
**init**.py
```

## Frontend - React

## Production build of our application — Docker

We would also add Nginx to our docker workflow which would allow us to serve both our Django and React applications running within Docker containers
