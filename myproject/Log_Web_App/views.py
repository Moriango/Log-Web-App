from django.shortcuts import render, HttpResponse

def home(request):
    print("In Views")
    # return HttpResponse("Hello, Django!")
    return render(request, "index.html")

def signup_login(request):
    print('In signup_login')
    return render(request, "signup.html")

def dashboard(request):
    print('In landing')
    return render(request, "dashboard.html")
