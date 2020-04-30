from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='consult_index'),
    path('get_categories', views.get_categories),
    path('get_consultancies', views.get_consults)
]
