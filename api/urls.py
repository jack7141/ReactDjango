from django.contrib import admin
from django.urls import path
from .views import ListRoomAPIView

app_name = "api"

urlpatterns = [
    path('', ListRoomAPIView.as_view(), name='ApiListView'),
]
