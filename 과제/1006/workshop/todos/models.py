import imp
from django.conf import settings
from django.db import models


class Todo(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=10)
    completed = models.BooleanField(default=False)
    

    def __str__(self):
        return self.title
    
