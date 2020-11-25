from django.contrib.auth.models import User
from rest_framework import serializers
from todolist.models import Task, CustomUser
from django.contrib.auth.hashers import make_password

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'title', 'priority', 'deadline', 'owner', 'is_done']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'username', 'password', 'first_name'] #, 'is_superuser', 'date_joined', 'is_staff', 'user_permissions', 'is_active', 'groups']

    def validate_password(self, value: str) -> str:
        return make_password(value)

