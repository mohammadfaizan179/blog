from dataclasses import field
from rest_framework import serializers
from blog.models import Blog
from blog.models import Category

class BlogSerializer(serializers.ModelSerializer):
    category_label = serializers.CharField(source='category.title', read_only=True)
    author_fn = serializers.CharField(source='profile.last_name', read_only=True)
    author_ln = serializers.CharField(source='profile.first_name', read_only=True)

    class Meta:
        model = Blog
        exclude = ['profile']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class CategoryBlogsSerializer(serializers.ModelSerializer):
    category_blogs = BlogSerializer(read_only=True, many=True)

    class Meta:
        model = Category
        fields = '__all__'


