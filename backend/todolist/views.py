from django.contrib.auth.models import User
from rest_framework import viewsets
from todolist.models import Task, CustomUser
from todolist.serializer import TaskSerializer, UserSerializer
from rest_framework.permissions import IsAuthenticated

class TaskViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)

    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class UserViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)

    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer