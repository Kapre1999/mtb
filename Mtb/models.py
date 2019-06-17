from django.db import models
from django.contrib.auth.models import User
from datetime import datetime
from ckeditor_uploader.fields import RichTextUploadingField
# Create your models here.

class Categorie(models.Model):
    Categorie_Name = models.CharField(max_length=150,null=False)
    Categorie_Created_By = models.ForeignKey(User,on_delete=models.CASCADE)
    Categorie_Created_On = models.DateTimeField(default=datetime.now)

    def __str__(self):
        return self.Categorie_Name


class Post(models.Model):
    Post_Title = models.CharField(null=False)
    Post_Categorie = models.ForeignKey(Categorie,null=False,on_delete=models.DO_NOTHING)
    Post_Author = models.ForeignKey(User,null=False,on_delete=models.DO_NOTHING)
    Post_Body = RichTextUploadingField(default="")
    Post_Header_Image = models.ImageField(upload_to='/Post_Header_Images/%Y/%m/')
    Post_Status = models.BooleanField(default=False)
    Post_Date = models.DateTimeField(default=datetime.now)

    def __str__(self):
        return self.Post_Title



