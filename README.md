# movie_recommender

## Backend — Python, Django, Django REST framework

So far, we have

-   Created REST API for
    -   content-based recommenders
    -   authentication (login/logout)
    -   update_password
-   Built simple recommenders (tell me what's trending)
-   Built content-based recommender (I like this one, and want to see more...)
    -   Catch "Movie not found" error

```
backend
└── django_app
    ├── mainapp
    │   ├── __init__.py
    │   ├── __pycache__
    │   ├── asgi.py
    │   ├── local_settings.py
    │   ├── settings.py
    │   ├── urls.py
    │   └── wsgi.py
    ├── manage.py
    ├── prediction
    │   ├── __init__.py
    │   ├── __pycache__
    │   ├── admin.py
    │   ├── apps.py
    │   ├── content_based.py
    │   ├── migrations
    │   ├── models.py
    │   ├── tests.py
    │   ├── urls.py
    │   └── views.py
    └── users
        ├── __init__.py
        ├── __pycache__
        ├── admin.py
        ├── apps.py
        ├── migrations
        ├── models.py
        ├── tests.py
        ├── urls.py
        └── views.py
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
    get_similar_recommendations(title,
                                n,
                                metadata,
                                cosine_sim,
                                indices,
                                )
    ```
-   _TODO_ Collaborative filtering engines (I've watched them, here is my ratings...)
    ref: https://towardsdatascience.com/item-based-collaborative-filtering-in-python-91f747200fab

## _TODO_ Production build of our application — Docker

We would also add Nginx to our docker workflow which would allow us to serve both our Django and React applications running within Docker containers
