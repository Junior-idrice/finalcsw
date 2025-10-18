from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
   
    path("auth/register/", views.register, name="register"),
    path("auth/login/", TokenObtainPairView.as_view(), name="login"),
    path("auth/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("auth/logout/", views.logout, name="logout"),
    
    
    path("notes/", views.notes, name="notes"),
    path("notes/<slug:slug>/", views.note_details, name="note-details"),
    path("notes-search/", views.search_notes, name='note-search'),
]