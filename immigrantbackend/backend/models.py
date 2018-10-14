from django.db import models

from django.utils import timezone

# Create your models here.

class ImmigrantProfile (models.Model):

    owner = models.OneToOneField(
        'auth.User',
        on_delete = models.CASCADE
    )

    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)

    location = models.CharField(max_length=255)
    years_in_residence = models.IntegerField()
    country_of_origin = models.CharField(max_length=255)

    bio = models.TextField()

class Community (models.Model):
    group_name = models.CharField(max_length=255)
    language_spoken = models.ForeignKey('Language', on_delete = models.SET_NULL, blank = True, null = True)
    location = models.CharField(max_length=255)

    def __str__(self):
        return self.group_name

class Language (models.Model):
    abbreviation = models.CharField(max_length=255)
    name = models.CharField(max_length=255)

class Post(models.Model):

    owner = models.ForeignKey('auth.User', related_name='post', on_delete=models.CASCADE)
    community = models.ForeignKey('Community', on_delete = models.CASCADE)
    title = models.CharField(max_length=300)
    text = models.TextField()

def one_day_from_now():
    return timezone.now() + timezone.timedelta(days=1)

class Event(models.Model):

    owner = models.ForeignKey('auth.User', related_name='event', on_delete=models.CASCADE)
    community = models.ForeignKey('Community', on_delete = models.CASCADE)
    name = models.CharField(max_length=255)
    date = models.DateTimeField(auto_now_add=False, default=one_day_from_now)


class Comment(models.Model):

    owner = models.ForeignKey('auth.User', related_name = 'comment', on_delete=models.CASCADE)
    community = models.ForeignKey('Community', on_delete = models.CASCADE)
    text = models.TextField()

class LanguageConfig(models.Model):

    owner = models.ForeignKey('auth.User', related_name='language_config', on_delete=models.CASCADE)
    lang = models.ForeignKey('Language', on_delete = models.SET_NULL, blank = True, null = True)
    welcome = models.TextField()

class JobPost(models.Model):

    employer = models.CharField(max_length=255)
    description = models.TextField()
    email = models.EmailField(max_length=255)
    phone = models.CharField(max_length=20)
    ad = models.BooleanField(default = False)
