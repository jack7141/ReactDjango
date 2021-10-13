# app이름/serializer.py 생성
from rest_framework import serializers # serializer import
from .models import Room # 선언한 모델 import

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room  # 모델 설정
        fields = "__all__"