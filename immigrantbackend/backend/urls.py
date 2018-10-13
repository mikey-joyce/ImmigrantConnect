from rest_framework.routers import DefaultRouter

from . import views

from django.urls import path, include

router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'profiles', views.ProfileViewSet)
router.register(r'communities', views.CommunityViewSet)
router.register(r'posts', views.PostViewSet)
router.register(r'events', views.EventViewSet)

urlpatterns = [
    path('', include(router.urls))
]
