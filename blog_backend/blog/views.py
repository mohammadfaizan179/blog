from rest_framework.viewsets import ModelViewSet
from blog.models import Blog, Category
from accounts.models import Profile
from .serializers import BlogSerializer, CategorySerializer, CategoryBlogsSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.generics import ListAPIView, RetrieveAPIView

# Create your views here.
class BlogViewSet(ModelViewSet):
    serializer_class = BlogSerializer

    def get_permissions(self):
        permission_classes = []
        if self.action in ['list', 'retrieve']:
            permission_classes = [AllowAny]
        elif self.action in ["create", "update", "destroy"]:
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]

    def get_queryset(self):
        if str(self.request.user) != "AnonymousUser":
            profile = Profile.objects.get(user=self.request.user)
            return Blog.objects.filter(profile=profile)
        return Blog.objects.all()

    def perform_create(self, serializer):
        profile = Profile.objects.filter(user=self.request.user).first()
        serializer.save(profile=profile)
        return super().perform_create(serializer)

    def perform_update(self, serializer):
        profile = self.request.user.profile
        serializer.save(profile=profile)
        return super().perform_create(serializer)

class CategoryList(ListAPIView):
    serializer_class = CategorySerializer

    def get_queryset(self):
        return Category.objects.all()

class CategoryBlogsList(RetrieveAPIView):
    serializer_class = CategoryBlogsSerializer
    queryset = Category.objects.all()
