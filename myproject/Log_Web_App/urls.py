from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("signup/login",views.signup_login,name="signup_login"),
    path('dashboard', views.dashboard, name='dashboard'),
]