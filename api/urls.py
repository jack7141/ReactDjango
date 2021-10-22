from .views import ToDoAPIViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('todo', ToDoAPIViewset)
