from django.urls import path

from .views import index, TodoDetailView, AuthorDetailView

urlpatterns = [
    path('', index),
    path('todos', index),
    path('todos/edit/<int:pk>', TodoDetailView.as_view()),
    path('todos/delete/<int:pk>', TodoDetailView.as_view()),

    path('authors', index),
    path('authors/edit/<int:pk>', AuthorDetailView.as_view()),
    path('authors/delete/<int:pk>', AuthorDetailView.as_view()),

]
