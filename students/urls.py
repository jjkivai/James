from django.urls import path
from . import views
urlpatterns = [
    path("api/students/", views.students_list),
    path('api/students/<int:pk>', views.students_detail)
]