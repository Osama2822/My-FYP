from django.contrib import admin
from django.urls import path ,include
from django.http import HttpResponse
from app1 import views
from django.contrib.auth import views as auth_views 
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('contact_us/' , views.contact_us, name='contact_us'),
    path('modules/' , views.modules, name='modules'),
    path('module2/' , views.module2, name='module2'),
    path('patience/' , views.patience, name='patience'),
    path('happy/' , views.happy, name='happy'),
    path('pillars/' , views.pillars, name='pillars'),
    path('disbelief/' , views.disbelief, name='disbelief'),
    path('weak/' , views.weak, name='weak'),
    path('lonely/' , views.lonely, name='lonely'),
    path('Angry/' , views.Angry, name='Angry'),
    path('depressed/' , views.depressed, name='depressed'),
    path('Add_to_favorites/' , views.Add_to_favourite, name='Add_to_favourite'),
    path('register/',views.register,name='register'),
    path('login/', views.loginpage, name="login"),  
	path('logout/', views.logoutUser, name="logout"),
    path('Duas/' , views.Duas, name='Duas'),
    path('How_to_perform_prayer/' , views.How_to_perform_prayer, name='How_to_perform_prayer'),
    path('How_to_perform_ablution/' , views.How_to_perform_ablution, name='How_to_perform_ablution'),
    path('Names_of_ALLAH_and_Tasbeehat/' , views.Names_of_ALLAH_and_Tasbeehat, name='Names_of_ALLAH_and_Tasbeehat'),
    path('boys/' , views.boys, name='boys'),
    path('girls/' , views.girls, name='girls'),
    path('male/' , views.male, name='male'),
    path('female/' , views.female, name='female'),
    path('kalmas/' , views.kalmas, name='kalmas'),
    path('islamic/' , views.islamic, name='islamic'),
    path('search/' , views.search, name='search'),


path('password_reset/',auth_views.PasswordResetView.as_view(),name='password_reset'),
 
path('password_reset/done/',auth_views.PasswordResetDoneView.as_view(),name='password_reset_done'),
 
path('reset/<uidb64>/<token>/',auth_views.PasswordResetConfirmView.as_view(),name='password_reset_confirm'),
 
path('reset/done/',auth_views.PasswordResetCompleteView.as_view(),name='password_reset_complete'),

     
]

