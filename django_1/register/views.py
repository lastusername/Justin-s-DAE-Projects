from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm

# Create your views here.
def registration(request):
    form = UserCreationForm()
    return render(request, 'register/register_page.html', {"form": form})