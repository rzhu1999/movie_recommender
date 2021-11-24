# movie_recommender

## Backend — Django, Django REST framework

* 配置记录 [文档](https://docs.google.com/document/d/1o46zOZQTPOKyToPfKKXi4Id4HQSccy3UWGFKViVTkj0/edit?usp=sharing)


```
backend/
.
├── HQ
│   ├── __init__.py
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
├── accounts
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── migrations
│   │   ├── 0001_initial.py
│   │   └── __init__.py
│   ├── models.py
│   ├── serializers.py
│   ├── tests.py
│   └── views.py
├── auth_system
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── contentrec
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── migrations
│   │   └── __init__.py
│   ├── models.py
│   ├── recommender
│   │   ├── apps.py
│   │   ├── engine_content.py
│   │   ├── engine_simple.py
│   │   ├── search_mysql.py
│   │   └── upload_mysql.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── db.sqlite3
├── manage.py
├── movie_meta.csv
├── s3reader.py
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
│   ├── serializer.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
└── sqlreader.py

15 directories, 58 files
```

## Frontend - React

```
frontend/
.
├── App.js
├── App1.js
├── __mocks__
│   ├── customers.js
│   ├── movies.js
│   └── products.js
├── actions
│   ├── auth.js
│   └── types.js
├── api
│   ├── apiConfig.js
│   ├── axiosClient.js
│   └── tmdbApi.js
├── assets
│   └── footer-bg.jpg
├── components
│   ├── DashboardLayout.js
│   ├── DashboardNavbar.js
│   ├── DashboardSidebar.js
│   ├── Feed.jsx
│   ├── GlobalStyles.js
│   ├── Leftbar.jsx
│   ├── Logo.js
│   ├── MainLayout.js
│   ├── MainNavbar.js
│   ├── NavItem.js
│   ├── Navbar.js
│   ├── Navbar0.js
│   ├── Post.jsx
│   ├── account
│   │   ├── AccountProfile.js
│   │   └── AccountProfileDetails.js
│   ├── customer
│   │   ├── CustomerListResults.js
│   │   └── CustomerListToolbar.js
│   ├── dashboard
│   │   ├── Barchart.js
│   │   ├── Block1.js
│   │   ├── Block2.js
│   │   ├── Block3.js
│   │   ├── Block4.js
│   │   ├── Doughnut.js
│   │   ├── LatestProducts.js
│   │   └── Table.js
│   ├── heroslide
│   │   ├── HeroSlide.jsx
│   │   └── hero-slide.scss
│   ├── icons
│   │   ├── Facebook.js
│   │   └── Google.js
│   ├── modal
│   │   ├── Modal.jsx
│   │   └── modal.scss
│   ├── movies
│   │   └── MovieCard.jsx
│   ├── postview
│   ├── product
│   │   ├── ProductCard.js
│   │   └── ProductListToolbar.js
│   ├── recommender
│   │   ├── Contentrec.js
│   │   ├── RecToolbar.js
│   │   └── Simrec.js
│   └── settings
│       ├── SettingsNotifications.js
│       └── SettingsPassword.js
├── containers
│   ├── Activate.js
│   ├── Facebook.js
│   ├── Google.js
│   ├── Home.js
│   ├── Login.js
│   ├── ResetPassword.js
│   ├── ResetPasswordConfirm.js
│   └── Signup.js
├── hocs
│   ├── Layout.js
│   └── Layout_old.js
├── icons
│   ├── Facebook.js
│   └── Google.js
├── index.js
├── pages
│   ├── Account.js
│   ├── Activate.js
│   ├── Contentbased.js
│   ├── Dashboard.js
│   ├── Explore.js
│   ├── Facebook.js
│   ├── Google.js
│   ├── Home.js
│   ├── Login.js
│   ├── NotFound.js
│   ├── ProductList.js
│   ├── RegisterOld.js
│   ├── ResetPassword.js
│   ├── ResetPasswordConfirm.js
│   ├── Settings.js
│   ├── Signup.js
│   └── Simple.js
├── reducers
│   ├── auth.js
│   └── index.js
├── store.js
└── theme
    └── index.jsx

22 directories, 84 files
```
