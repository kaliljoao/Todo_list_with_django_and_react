from allauth.account.views import confirm_email
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
from todolist.views import TaskViewSet, UserViewSet
from rest_framework import routers
from rest_framework_simplejwt import views as jwt_views

router = routers.DefaultRouter()
router.register(r'tasks', TaskViewSet)
router.register(r'users', UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path("user/tasks/", TaskViewSet.getAllFromUserId, name="task_from_user"),
    path("user/info/", UserViewSet.get_logged_user, name="get_logged_user"),
    path("user/tasks/<int:priority>/", TaskViewSet.getAllFromUserIdAndPriority, name="task_from_user_with_priority"),
    path("user/tasks-detail/<int:id>/", TaskViewSet.delete_task, name="delete_task_from_user"),
    path("user/tasks-detail/update/<int:id>/", TaskViewSet.update_task, name="update_task"),
    path('auth/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]
