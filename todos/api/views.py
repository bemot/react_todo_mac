from rest_framework import viewsets

from .serializers import TodoSerializer
from .serializers import AuthorSerializer
from todos.models import Author, Todo


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer


