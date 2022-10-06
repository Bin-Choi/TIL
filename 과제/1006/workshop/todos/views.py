from django.shortcuts import render, redirect
from .models import Todo
from .forms import TodoForm

def index(request):
    if request.user.is_authenticated:
        author_pk = request.user.id
        todos = Todo.objects.filter(author_id = author_pk)
        context = {
            'todos': todos,
        }
        return render(request, 'todos/index.html', context)
    
def new(request):
    pass
    
    