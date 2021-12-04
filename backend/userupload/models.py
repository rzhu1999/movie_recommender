from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _


def upload_to(instance, filename):
    return 'user_images/{filename}'.format(filename=filename)

class Post(models.Model):

    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset()

    title = models.CharField(max_length=250)
    tmdbId = models.PositiveIntegerField()
    image = models.ImageField(
        _("Image"), upload_to=upload_to, default='posts/default.jpg')
    content = models.TextField()
    rating = models.PositiveIntegerField(null=True)
    date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title
