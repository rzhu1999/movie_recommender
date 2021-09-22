# movie_recommender

## Backend — Django, Django REST framework

the main app which would serve our Django application. However, all other functionality would be performed by other custom apps we create, such as the prediction app in our case. We would add another app called ‘users’ later on.

```
movie_recommender/backend
└── django_app
    ├── mainapp
    │   ├── __init__.py
    │   ├── asgi.py
    │   ├── settings.py
    │   ├── urls.py
    │   └── wsgi.py
    ├── manage.py
    └── prediction
        ├── __init__.py
        ├── admin.py
        ├── apps.py
        ├── migrations
        │   └── __init__.py
        ├── models.py
        ├── tests.py
        └── views.py
```

## Frontend - React

## Production build of our application — Docker

We would also add Nginx to our docker workflow which would allow us to serve both our Django and React applications running within Docker containers
