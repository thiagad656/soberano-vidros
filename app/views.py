from django.shortcuts import render

def home(request):
    return render(request, 'index.html')  # Página inicial

def aboutus(request):
    return render(request, 'aboutus.html')  # Página sobre

def galery(request):
    return render(request, 'galery.html')  # Página galeria

def contacts(request):
    return render(request, 'contacts.html')  # Página contato

def footer(request):
    return render(request, 'footer.html')  # Página rodapé
