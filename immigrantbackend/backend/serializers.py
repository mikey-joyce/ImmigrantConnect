
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework import serializers

from . import models

from django.contrib.auth.models import User
from .models import ImmigrantProfile

#class SnippetSerializer(serializers.ModelSerializer):
    #class Meta:
        #model = Snippet
        #fields = ('id', 'title', 'code', 'linenos', 'language', 'style')

# MIKEY

# CREATE the Collection Serializer, Event Serializer, Post Serializer

class UserSerializer(serializers.ModelSerializer):


    class Meta:
        model = User
        fields =('id', 'username')

class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = ImmigrantProfile
        fields = ('id', 'owner', 'first_name', 'last_name', 'location', 'years_in_residence', 'country_of_origin', 'bio')
