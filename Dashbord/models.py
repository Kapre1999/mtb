from django.db import models

from django.contrib.auth.models import User
# Create your models here.


class Author(models.Model):
    user = models.OneToOneField(User)
    profile_image = models.ImageField(upload_to="UserProfileImage/%Y/%m/%d/")
