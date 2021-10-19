# app이름/serializer.py 생성
from rest_framework import serializers # serializer import
from .models import ToDo # 선언한 모델 import

class ToDoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDo  # 모델 설정
        fields = "__all__"