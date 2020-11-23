from django.contrib.auth.models import User
from rest_framework import serializers
from todolist.models import Task, CustomUser
from django.contrib.auth.hashers import make_password

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'Description', 'Priority', 'ExecutionDate', 'Creator']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'username', 'first_name', 'password', 'is_superuser', 'date_joined', 'is_staff', 'user_permissions', 'is_active', 'groups']

    def validate_password(self, value: str) -> str:
        return make_password(value)

