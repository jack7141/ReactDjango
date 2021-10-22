from django.urls import path
from todos import views as TodoViews


app_name = "todos"

urlpatterns = [
    path("search/", TodoViews.Search, name="TodoSearch"),
]
