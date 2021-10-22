# movie_recommender

## Backend — Django, Django REST framework

the main app which would serve our Django application. However, all other functionality would be performed by other custom apps we create, such as the prediction app in our case. We would add another app called ‘users’ later on.

```
movie_recommender
├── README.md
├── Useful\ resources.md
├── backend
│   └── django_app
│       ├── db.sqlite3
│       ├── mainapp
│       │   ├── __init__.py
│       │   ├── __pycache__
│       │   ├── asgi.py
│       │   ├── local_settings.py
│       │   ├── settings.py
│       │   ├── urls.py
│       │   └── wsgi.py
│       ├── manage.py
│       ├── prediction
│       │   ├── __init__.py
│       │   ├── __pycache__
│       │   ├── admin.py
│       │   ├── apps.py
│       │   ├── migrations
│       │   ├── models.py
│       │   ├── tests.py
│       │   ├── url.py
│       │   └── views.py
│       └── users
│           ├── __pycache__
│           └── migrations
├── engine
│   └── recommend_engine.ipynb
└── requirements.txt
```

## Frontend - React

## Recommend Engine - Python

Broadly, recommender systems can be classified into 3 types:

-   Simple recommenders (tell me what's trending)
    ```
    get_top_recommendations(n)
    ```
-   Content-based recommenders (I like this one, and want to see more...)
    ```
    get_similar_recommendations(title)
    ```
-   Collaborative filtering engines (I've watched them, here is my ratings...)
    ref: https://towardsdatascience.com/item-based-collaborative-filtering-in-python-91f747200fab

## Production build of our application — Docker

We would also add Nginx to our docker workflow which would allow us to serve both our Django and React applications running within Docker containers
