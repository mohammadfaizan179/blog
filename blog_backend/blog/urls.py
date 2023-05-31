from django.urls import path, include
from .views import BlogViewSet, CategoryList, CategoryBlogsList
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'blog', BlogViewSet, 'blog')

urlpatterns = [
    path('', include(router.urls)),
    path('category/list/', CategoryList.as_view(), name='category'),
    path('category/<int:pk>/blogs/', CategoryBlogsList.as_view(), name='category_blogs'),
]
