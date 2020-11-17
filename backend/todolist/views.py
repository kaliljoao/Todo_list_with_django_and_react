from rest_framework import viewsets
from todolist.models import Task
from todolist.serializer import TaskSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


