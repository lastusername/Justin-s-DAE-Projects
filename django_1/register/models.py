from django.db import models

# Create your models here.

class useRegistration(models.Model):
    firstName = models.TextField(max_length=50)
    lastName = models.TextField(max_length=50)
    email = models.EmailField()
    password = models.CharField()
    rePassword = models.CharField()

    def __str__(self):
        return self.title