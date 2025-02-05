from django.shortcuts import render

def home(request):
    return render(request, 'index.html')  # Página inicial

def sobre(request):
    return render(request, 'sobre.html')  # Página sobre

def galeria(request):
    return render(request, 'galeria.html')  # Página galeria

def contato(request):
    return render(request, 'contato.html')  # Página contato
