# movie_recommender

## Backend — Django, Django REST framework

* 配置记录 [文档](https://docs.google.com/document/d/1o46zOZQTPOKyToPfKKXi4Id4HQSccy3UWGFKViVTkj0/edit?usp=sharing)


```
backend
└── django_app
    ├── mainapp
    │   ├── __pycache__
    │   │   ├── __init__.cpython-38.pyc
    │   │   ├── local_settings.cpython-38.pyc
    │   │   ├── settings.cpython-38.pyc
    │   │   ├── urls.cpython-38.pyc
    │   │   └── wsgi.cpython-38.pyc
    │   ├── __init__.py
    │   ├── asgi.py
    │   ├── local_settings.py
    │   ├── settings.py
    │   ├── urls.py
    │   └── wsgi.py
    ├── prediction
    │   ├── __pycache__
    │   │   ├── __init__.cpython-38.pyc
    │   │   ├── admin.cpython-38.pyc
    │   │   ├── apps.cpython-38.pyc
    │   │   ├── models.cpython-38.pyc
    │   │   ├── urls.cpython-38.pyc
    │   │   └── views.cpython-38.pyc
    │   ├── migrations
    │   │   ├── __pycache__
    │   │   │   └── __init__.cpython-38.pyc
    │   │   └── __init__.py
    │   ├── mlmodel
    │   │   ├── IRISRandomForestClassifier.joblib
    │   │   └── irism.py
    │   ├── __init__.py
    │   ├── admin.py
    │   ├── apps.py
    │   ├── models.py
    │   ├── tests.py
    │   ├── urls.py
    │   └── views.py
    ├── users
    │   ├── __pycache__
    │   │   ├── __init__.cpython-38.pyc
    │   │   ├── admin.cpython-38.pyc
    │   │   ├── apps.cpython-38.pyc
    │   │   ├── models.cpython-38.pyc
    │   │   ├── urls.cpython-38.pyc
    │   │   └── views.cpython-38.pyc
    │   ├── migrations
    │   │   ├── __pycache__
    │   │   │   └── __init__.cpython-38.pyc
    │   │   └── __init__.py
    │   ├── __init__.py
    │   ├── admin.py
    │   ├── apps.py
    │   ├── models.py
    │   ├── tests.py
    │   ├── urls.py
    │   └── views.py
    ├── db.sqlite3
    └── manage.py

12 directories, 45 files
```

## Frontend - React

```
frontend/react_app/src
├── components
│   ├── Footer.js
│   ├── Home.js
│   ├── Layout.js
│   ├── Login.js
│   ├── PasswordUpdate.js
│   └── TopBar.js
├── store
│   ├── authActionTypes.js
│   ├── authActions.js
│   └── authReducer.js
├── App.js
├── App.test.js
├── Urls.js
├── index.js
├── reportWebVitals.js
├── serviceWorker.js
├── settings.js
└── setupTests.js
```
## Production build of our application — Docker

Not included
