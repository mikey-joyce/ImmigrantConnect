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
    group_name = models.CharField(max_length=255)
    language_spoken = models.ForeignKey('Language', on_delete = models.SET_NULL, blank = True, null = True)

class Language (models.Model):
    abbreviation = models.CharField(max_length=255)
    name = models.CharField(max_length=255)

# Mikey Dev
class Post(models.Model):

    pass

# Mikey Dev
class Event(models.Model):

    pass

class Comment(models.Model):

    owner = models.ForeignKey('auth.User', related_name = 'comment', on_delete=models.CASCADE)
    community = models.ForeignKey('Community', on_delete = models.CASCADE)

    text = models.TextField()


# Mikey Dev
class LanguageConfig(models.Model):

    pass
