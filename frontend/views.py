from django.shortcuts import render
from django.views.generic.detail import DetailView

from todos.models import Todo, Author


def index(request):
    return render(request, 'frontend/index.html')


class TodoDetailView(DetailView):
    model = Todo
    template_name = 'frontend/index.html'

class AuthorDetailView(DetailView):
    model = Author
    template_name = 'frontend/index.html'
