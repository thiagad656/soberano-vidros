import os
from django.conf import settings
from django.shortcuts import render
from .models import FotoGaleria

def home(request):
    return render(request, 'index.html')  # Página inicial

def aboutus(request):
    return render(request, 'aboutus.html')  # Página sobre

def gallery(request):
    destaques = FotoGaleria.objects.filter(destaque=True).order_by('-data_upload')[:5]
    fotos = FotoGaleria.objects.all().order_by('-data_upload')
    return render(request, 'gallery.html', {
        'destaques': destaques,
        'fotos': fotos
    })


def contacts(request):
    return render(request, 'contacts.html')  # Página contato

def footer(request):
    return render(request, 'footer.html')  # Página rodapé
