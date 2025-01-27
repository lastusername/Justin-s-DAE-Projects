from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.posts_list, name='posts'),
    path("<slug:slug>", views.post_post_page, name='posts'),
]