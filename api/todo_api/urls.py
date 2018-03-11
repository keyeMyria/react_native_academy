"""todo_api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path, re_path
from rest_framework_nested import routers
from rest_framework_jwt.views import obtain_jwt_token

from api.todo_api import settings
from .api import views

# Allows us to automatically generate URLs from ViewSets
router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'lists', views.TODOListViewSet)
router.register(r'items', views.TODOItemViewSet)


urlpatterns = [
    path('admin/', admin.site.urls, name='admin'),

    re_path(r'^', include(router.urls)),
    path('api/auth/', include('rest_framework.urls'), name='auth'),
    path(r'api/token-auth/', obtain_jwt_token, name='token-auth'),
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        re_path(r'^__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns
