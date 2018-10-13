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

    owner = models.ForeignKey('auth.User', related_name='post', on_delete=models.CASCADE)
    title = models.CharField(max_length=300)
    text = models.TextField()


class Event(models.Model):

    owner = models.ForeignKey('auth.User', related_name='event', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now_add=False, default=timezone.now+24)



class Comment(models.Model):

    pass

class LanguageConfig(models.Model):

    owner = models.ForeignKey('auth.User', related_name='language_config', on_delete=models.CASCADE)
    lang = models.CharField(max_length=100)
    welcome = models.TextField()
