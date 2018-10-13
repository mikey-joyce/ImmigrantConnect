
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework import serializers

from . import models

from django.contrib.auth.models import User
from .models import ImmigrantProfile, Community, Event, Post, LanguageConfig, Comment

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

class CommunitySerializer(serializers.ModelSerializer):

	class Meta:
		model = Community
		fields = ('id', 'group_name', 'language_spoken', 'location')

class PostSerializer(serializers.ModelSerializer):

	class Meta:
		model = Post
		fields = ('id', 'owner', 'community', 'title', 'text')

class EventSerializer(serializers.ModelSerializer):

	class Meta:
		model = Event
		fields = ('id', 'owner', 'community','name', 'date')

class CommentSerializer(serializers.ModelSerializer):

	class Meta:
		model = Comment
		fields = ('id', 'owner', 'community', 'text')

class LanguageConfigSerializer(serializers.ModelSerializer):

	class Meta:
		model = LanguageConfig
		fields = ('id', 'owner', 'lang', 'welcome')
