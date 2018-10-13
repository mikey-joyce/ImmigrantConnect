from django.contrib import admin

from . import models

# Register your models here.

admin.site.register(models.ImmigrantProfile)
admin.site.register(models.Community)
admin.site.register(models.Language)
admin.site.register(models.Post)
admin.site.register(models.Event)
admin.site.register(models.Comment)
admin.site.register(models.LanguageConfig)

