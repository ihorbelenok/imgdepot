"""imgdepot URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.auth.decorators import login_required
from depot import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
  url(r'^$', views.main, name="main"),
  url(r'^upload/$', login_required(views.ImageEntryCreate.as_view()), name="upload"),
  url(r'^image/(?P<id>\d+)/$', views.ImageEntryDisplay, name="display"),
  url(r'^admin/', admin.site.urls),
  url(r'^accounts/', include('allauth.urls')),
]

if settings.DEBUG is True:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
