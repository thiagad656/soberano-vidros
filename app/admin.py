from django.contrib import admin
from .models import FotoGaleria

@admin.register(FotoGaleria)
class FotoGaleriaAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'destaque', 'data_upload')
    list_filter = ('destaque', 'data_upload')
    search_fields = ('titulo', 'descricao')
