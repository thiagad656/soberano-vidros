from django.db import models

class FotoGaleria(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = models.TextField()
    imagem = models.ImageField(upload_to='galeria/')
    destaque = models.BooleanField(default=False)
    data_upload = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo