from django.contrib import admin
from .models import Category, Blog
# Register your models here.

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['title']

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ['profile', 'category', 'title', 'created_at']