from django.contrib.auth.models import User
from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser

from todolist.models import Task, CustomUser
from todolist.serializer import TaskSerializer, UserSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from django.http.response import JsonResponse
import json


class TaskViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)

    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    @api_view(['GET'])
    def getAllFromUserId(request):
        queryset = Task.objects.filter(Creator=request.user.id)
        return JsonResponse(TaskSerializer(queryset, many=True).data, safe=False)

    @api_view(['GET'])
    def getAllFromUserIdAndPriority(request, priority):
        queryset = Task.objects.filter(Creator=request.user.id, Priority=priority)
        return JsonResponse(TaskSerializer(queryset, many=True).data, safe=False)

    @api_view(['DELETE'])
    def delete_task(request, id, format=None):
        if request.method == 'DELETE':
            task = Task.objects.get(id=id, Creator=request.user.id)
            task.delete()
            queryset = Task.objects.filter(Creator=request.user.id)
            return JsonResponse(TaskSerializer(queryset, many=True).data, safe=False)

    @api_view(['PUT'])
    def update_task(request, id):
        # print(JSONParser.parse(request.data))
        task = Task.objects.get(id=id, Creator=request.user.id)
        serializer = TaskSerializer(task, data=request.data)
        if serializer.is_valid():
            serializer.save()
        queryset = Task.objects.filter(Creator=request.user.id)
        return JsonResponse(TaskSerializer(queryset, many=True).data, safe=False)

class UserViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)

    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer