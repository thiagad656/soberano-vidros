from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Página inicial com todas as seções
    path('contato/', views.contacts, name='contacts'),  # Página de contato separada
    path('galeria/', views.gallery, name='galeria'),  # Página da galeria de fotos
]
