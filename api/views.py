from rest_framework.generics import ListAPIView

# 기존의 APIView를 통합한 클래스 ==> CRUD를 한번에 처리할 수 있음
from rest_framework import viewsets
from .models import ToDo
from .serializers import ToDoSerializer
 
class ToDoAPIViewset(viewsets.ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer

