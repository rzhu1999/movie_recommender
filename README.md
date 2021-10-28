# movie_recommender

## Backend — Django, Django REST framework

* 配置记录 [文档](https://docs.google.com/document/d/1o46zOZQTPOKyToPfKKXi4Id4HQSccy3UWGFKViVTkj0/edit?usp=sharing)


```
backend/
└── django_app
    ├── HQ
    │   ├── __init__.py
    │   ├── __pycache__
    │   │   ├── __init__.cpython-38.pyc
    │   │   └── apps.cpython-38.pyc
    │   ├── admin.py
    │   ├── apps.py
    │   ├── migrations
    │   │   └── __init__.py
    │   ├── models.py
    │   ├── static
    │   │   └── blog
    │   │       └── main.css
    │   ├── templates
    │   │   └── HQ
    │   │       ├── HQs.html
    │   │       ├── about.html
    │   │       ├── base.html
    │   │       └── home.html
    │   ├── tests.py
    │   ├── urls.py
    │   └── views.py
    ├── contentrec
    │   ├── __init__.py
    │   ├── admin.py
    │   ├── apps.py
    │   ├── migrations
    │   │   └── __init__.py
    │   ├── models.py
    │   ├── recommender
    │   │   ├── engine_content.py
    │   │   ├── engine_simple.py
    │   │   ├── search_mysql.py
    │   │   └── upload_mysql.py
    │   ├── tests.py
    │   ├── urls.py
    │   └── views.py
    ├── db.sqlite3
    ├── mainapp
    │   ├── __init__.py
    │   ├── __pycache__
    │   │   ├── __init__.cpython-38.pyc
    │   │   ├── local_settings.cpython-38.pyc
    │   │   ├── settings.cpython-38.pyc
    │   │   ├── urls.cpython-38.pyc
    │   │   └── wsgi.cpython-38.pyc
    │   ├── asgi.py
    │   ├── local_settings.py
    │   ├── settings.py
    │   ├── urls.py
    │   └── wsgi.py
    ├── manage.py
    ├── prediction
    │   ├── __init__.py
    │   ├── __pycache__
    │   │   ├── __init__.cpython-38.pyc
    │   │   ├── admin.cpython-38.pyc
    │   │   ├── apps.cpython-38.pyc
    │   │   ├── models.cpython-38.pyc
    │   │   ├── urls.cpython-38.pyc
    │   │   └── views.cpython-38.pyc
    │   ├── admin.py
    │   ├── apps.py
    │   ├── migrations
    │   │   ├── __init__.py
    │   │   └── __pycache__
    │   │       └── __init__.cpython-38.pyc
    │   ├── mlmodel
    │   │   ├── IRISRandomForestClassifier.joblib
    │   │   └── irism.py
    │   ├── models.py
    │   ├── tests.py
    │   ├── urls.py
    │   └── views.py
    ├── simrec
    │   ├── __init__.py
    │   ├── admin.py
    │   ├── apps.py
    │   ├── migrations
    │   │   ├── 0001_initial.py
    │   │   └── __init__.py
    │   ├── models.py
    │   ├── recommender_sim
    │   │   ├── engine_content.py
    │   │   ├── engine_content_ind.py
    │   │   └── engine_simple.py
    │   ├── tests.py
    │   ├── urls.py
    │   └── views.py
    └── users
        ├── __init__.py
        ├── __pycache__
        │   ├── __init__.cpython-38.pyc
        │   ├── admin.cpython-38.pyc
        │   ├── apps.cpython-38.pyc
        │   ├── models.cpython-38.pyc
        │   ├── urls.cpython-38.pyc
        │   └── views.cpython-38.pyc
        ├── admin.py
        ├── apps.py
        ├── migrations
        │   ├── __init__.py
        │   └── __pycache__
        │       └── __init__.cpython-38.pyc
        ├── models.py
        ├── tests.py
        ├── urls.py
        └── views.py

12 directories, 45 files
```

## Frontend - React

Will upload later

