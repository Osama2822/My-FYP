
from django.contrib import admin
from django.urls import path,include 
from django.http import HttpResponse
from django.contrib.auth import views as auth_views 

from django.views.static import serve
from django.conf.urls import url
from django.conf  import settings


urlpatterns = [
    path('admin/', admin.site.urls),
    path('registration/',include('django.contrib.auth.urls')),
    path('',include('app1.urls')),
    path('password_reset/',auth_views.PasswordResetView.as_view(),name='password_reset'),
    path('password_reset/done/',auth_views.PasswordResetDoneView.as_view(),name='password_reset_done'),
    path('reset/<uidb64>/<token>/',auth_views.PasswordResetConfirmView.as_view(),name='password_reset_confirm'),
    path('reset/done/',auth_views.PasswordResetCompleteView.as_view(),name='password_reset_complete'),

    url(r'^media/(?P<path>.*)$', serve,{'document_root':       settings.MEDIA_ROOT}), 
    url(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}),
    
]
