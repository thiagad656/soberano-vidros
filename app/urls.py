from django.urls import path
from . import views  # Importa as views

urlpatterns = [
    path('', views.home, name='home'),  # Página inicial
    # Adicione outras rotas, como para "Sobre", "Galeria" e "Contato"
    path('sobre/', views.aboutus, name='sobre'),
    path('galeria/', views.galery, name='galeria'),
    path('contato/', views.contacts, name='contato'),
]
