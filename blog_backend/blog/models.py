from email.mime import image
from pyexpat import model
from django.db import models
from accounts.models import Profile

# Create your models here.

class Category(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='category-images')

    def __str__(self) -> str:
        return self.title

class Blog(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='profile_blogs')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='category_blogs')
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    image = models.ImageField(upload_to='blog-images')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class BlogLike(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE, related_name='blog_likes')
    like = models.BooleanField(default=False)

class BlogComments(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE, related_name='blog_comments')
    comment = models.CharField(max_length=100)