from django.urls import path
from todos import views as TodoViews


app_name = "core"

urlpatterns = [
    path("", TodoViews.Home, name="CoreHomeView"),
    # path("", TodoViews.GlobalView.as_view(), name="CoreHomeView"),
]
