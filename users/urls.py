from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='users_index'),
    path(
        'send_stars/<int:consult_pk>/<int:user_pk>/<int:stars>',
        views.send_stars,
    ),
    path('get_users', views.get_users),
    path('login/<str:user_email>/<str:user_pass>', views.login),
    path(
        'create_user/<str:name>/<str:business_name>/<str:user_email>/<str:user_password>/<str:state>/<str:city>/<str:image_link>',
        views.create_user
    ),
    path('delete_user/<int:user_pk>', views.delete_user),
    path('create_date/<int:user_pk>/<int:consult_pk>/<str:date>', views.create_date),
    path('get_dates', views.get_dates)
]
