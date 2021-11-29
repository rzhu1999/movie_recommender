# from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
    path('', include('HQ.urls')),
    path('simple/', include('simrec.urls')),
    path('content/', include('contentrec.urls')),
    path('ratings/', include('ratings.urls')),
]
# urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]