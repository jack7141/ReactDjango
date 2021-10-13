from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView, UpdateAPIView
from .models import Room
from .serializers import RoomSerializer


class ListRoomAPIView(ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

