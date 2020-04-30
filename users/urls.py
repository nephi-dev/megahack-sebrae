from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='users_index'),
    path('send_stars', views.send_stars),
    path(
        'send_stars/<int:consult_pk>/<int:user_pk>/<int:stars>',
        views.send_stars,
        name='users_send_stars'
    ),
]
