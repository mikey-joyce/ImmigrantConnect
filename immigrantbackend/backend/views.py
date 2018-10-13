from django.http import HttpResponse
from django.contrib.auth.models import User
from django.shortcuts import render, get_object_or_404

from rest_framework import viewsets

from rest_framework.decorators import action
from rest_framework.response import Response

from backend.serializers import UserSerializer, ProfileSerializer, CommunitySerializer, PostSerializer, EventSerializer

#Import models
from .models import ImmigrantProfile, Community, Post, Event

# Create your views here.

def index(request):
    html = "<p>Hello World!</p>"
    return HttpResponse(html)

class UserViewSet(viewsets.ViewSet):
    """
    Simple viewset for listing or retrieving users
    """

    queryset = User.objects.all()

    def list(self, request):
        queryset = User.objects.all()
        serializer = UserSerializer(queryset, many = True)
        return Response(serializer.data)

    def retrieve(self, request, pk = None):
        queryset = User.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    @action(detail=True)
    def profile(self, request, pk = None):
        user_queryset = User.objects.all()
        user = get_object_or_404(user_queryset, pk=pk)
        queryset = ImmigrantProfile.objects.all()
        serializer = ProfileSerializer(get_object_or_404(queryset, owner = user))
        return Response(serializer.data)

class ProfileViewSet(viewsets.ModelViewSet):

    queryset = ImmigrantProfile.objects.all()
    serializer_class = ProfileSerializer

    def perform_create(self, serializer):
        serializer.save()

class CommunityViewSet(viewsets.ModelViewSet):
    queryset = Community.objects.all()
    serializer_class = CommunitySerializer

    def perform_create(self, serializer):
    	serializer.save()

    @action(detail=True)
    def posts(self, request, pk = None):
        community = self.get_object()
        queryset = Post.objects.all()

        serializer = PostSerializer(get_object_or_404(queryset, community = community))

        return Response(serializer.data)


    @action(detail=True)
    def events(self, request, pk = None):
        community = self.get_object()
        queryset = Event.objects.all()

        serializer = EventSerializer(get_object_or_404(queryset, community = community))

        return Response(serializer.data)

class PostViewSet(viewsets.ModelViewSet):
	queryset = Post.objects.all()
	serializer_class = PostSerializer

	def perform_create(self, serializer):
		serializer.save()


class EventViewSet(viewsets.ModelViewSet):
	queryset = Event.objects.all()
	serializer_class = EventSerializer

	def perform_create(self, serializer):
		serializer.save()
