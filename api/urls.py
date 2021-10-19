from .views import  ToDoAPIViewset
from rest_framework import routers

# app_name = "api"

# urlpatterns = [
#     path('', ToDoAPIViewset.as_view(), name='ApiListView'),
# ]

router = routers.DefaultRouter()
router.register('todo', ToDoAPIViewset)
