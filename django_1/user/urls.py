from django.urls import path, include
from . import views

app_name = 'user'

urlpatterns = [
    path('register/',views.registration, name='register'),
    path('login/',views.signIn, name='login'),
    path("logout/",views.signOut, name='logout')

]