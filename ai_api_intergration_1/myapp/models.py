from django.db import models

# Create your models here.

class TodoItem(models.Model) :
    title = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)

class Post(models.Model):
    Title = models.TextField()
    Description = models.TextField(max_length=75)

    def __str__ (self):
        return self.title