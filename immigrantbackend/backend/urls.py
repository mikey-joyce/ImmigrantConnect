from rest_framework.routers import DefaultRouter

from . import views

from django.urls import path, include

router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'profiles', views.ProfileViewSet)
router.register(r'communities', views.CommunityViewSet)
router.register(r'posts', views.PostViewSet)
router.register(r'events', views.EventViewSet)
router.register(r'comments', views.CommentViewSet)
router.register(r'language_configs', views.LanguageConfigViewSet)
router.register(r'job_posts', views.JobPostViewSet)

urlpatterns = [
    path('', include(router.urls))
]
