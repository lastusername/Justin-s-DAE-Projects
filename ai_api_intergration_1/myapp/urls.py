from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("weather/", views.weather, name="weather"),
    path("todos/", views.todos, name="Todos")
]