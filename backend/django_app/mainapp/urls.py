from django.contrib import admin
from django.urls import path, include

urlpatterns = [
	# original
	path('admin/', admin.site.urls),
	path('api/auth/', include('users.urls')),
	path('api/', include('prediction.urls')),
	# List of urls
	path('', include('HQ.urls')),
	# Recommenders
	path('simple/', include('simrec.urls')),
	path('content/', include('contentrec.urls')),
	# new for test but not sure
	path('api-auth/', include('rest_framework.urls')),
	path('rest-auth/', include('rest_auth.urls')),
	path('rest-auth/registration/', include('rest_auth.registration.urls')),
]
