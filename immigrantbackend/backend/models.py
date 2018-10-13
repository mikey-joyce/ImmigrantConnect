from django.db import models

# Create your models here.

class ImmigrantProfile (models.Model):
    owner = models.ForeignKey('auth.User', related_name = 'immigrant_profile', on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)

    location = models.CharField(max_length=255)
    years_in_residence = models.IntegerField()
    country_of_origin = models.CharField(max_length=255)

    bio = models.TextField()

class Community (models.Model):

    pass

class Post(models.Model):

    pass

class Event(models.Model):

    pass

class Comment(models.Model):

    pass

class LanguageConfig(models.Model):

    pass
