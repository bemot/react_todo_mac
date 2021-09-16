from rest_framework import routers

from .views import AuthorViewSet, TodoViewSet

router = routers.DefaultRouter()
router.register('todos', TodoViewSet, 'todos')
router.register('authors',AuthorViewSet, 'authors')

urlpatterns = router.urls
