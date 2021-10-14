from .views import index
from django.urls import path

app_name = "frontend"

urlpatterns = [
    path('', index),
    path('join/', index),
    path('create/', index),
]
