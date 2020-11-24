from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from todolist.models import Task, CustomUser

class Tasks(admin.ModelAdmin):
    list_display = ('title',)

class Users(UserAdmin):
    list_display = ('id','email')


admin.site.register(Task, Tasks)