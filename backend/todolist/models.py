from django.contrib.auth.base_user import BaseUserManager, AbstractBaseUser
from django.contrib.auth.models import AbstractUser, PermissionsMixin
from django.db import models
from django.conf import settings



class Task(models.Model):
    TASK_PRIORITIES = (
        (1, 'DANGER'),
        (2, 'WARNING'),
        (3, 'RELAX'),
    )
    Description = models.CharField(null=False, max_length=300)
    Priority = models.IntegerField(null=True, choices=TASK_PRIORITIES)
    ExecutionDate = models.DateTimeField()
    Creator = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

class CustomUser(AbstractUser):
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)


    def __str__(self):
        return self.email