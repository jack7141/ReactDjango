from django.urls import path, include
from api import views as ApiViews

app_name = "core"

urlpatterns = [
    path('', ApiViews.HomeView, name='ApiHomeView'),
]
