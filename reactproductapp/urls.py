from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import AdminViewSet

router=DefaultRouter()

router.register(r'admin',AdminViewSet,basename='admin')

urlpatterns= [
    path('api/'include(router.urls)),
    path('api-auth/',include('rest framework.urls')),
]