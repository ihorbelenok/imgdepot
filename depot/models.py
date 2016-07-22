from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class ImageEntry(models.Model):
  image = models.ImageField(height_field="height", width_field="width")
  height = models.IntegerField()
  width = models.IntegerField()
  uploader = models.ForeignKey(User)
  date = models.DateTimeField(auto_now_add=True)
  views = models.IntegerField(default=0)
  sfw = models.BooleanField(default=True)