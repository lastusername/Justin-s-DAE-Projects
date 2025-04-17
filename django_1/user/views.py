from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login
# Create your views here.
def registration(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            login(request, form.save())
            return redirect("posts:list")
    else:
        form = UserCreationForm()
    return render(request, 'users/register_page.html', {"form": form})

def signIn(request):
    if request.method == "POST":
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            login(request, form.get_user())
            return redirect("posts:list")
    else:
        form = AuthenticationForm(request.POST)
        return render(request, 'users/login_page.html', {"form": form})