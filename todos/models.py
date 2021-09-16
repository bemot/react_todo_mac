from django.db import models

class Author(models.Model):
    author = models.CharField(max_length=100)
    
    def __str__(self):
        return self.author


class Todo(models.Model):
    task = models.CharField(max_length=255)
    author = models.ForeignKey(Author, default = 1, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.task


