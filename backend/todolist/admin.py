from django.contrib import admin
from todolist.models import Task

class Tasks(admin.ModelAdmin):
    list_display = ('Description',)

admin.site.register(Task, Tasks)