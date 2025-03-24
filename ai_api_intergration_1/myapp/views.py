from django.shortcuts import render
from .models import TodoItem
# Create your views here.

def home(request):
    return render(request,"home.html")

def weather(request):
    return render(request, "weather.html")

def todos(request):
    items= TodoItem.objects.all()
    return render(request, "todos.html", {"todos": items})
