from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='consult_index'),
    path('get_categories', views.get_categories),
    path('get_consultancies', views.get_consults),
    path(
        'create_consult/<int:user_pk>/<str:title>/<str:desc>/<str:price>/<int:category_pk>/<int:sub_category_pk>',
        views.create_consult
    ),
    path('delete_consult/<int:consult_pk>', views.delete_consult),
    path(
        'send_message/<str:message>/<int:consult_pk>/<int:user_pk>',
        views.send_message
    ),
    path('delete_message/<int:message_pk>', views.delete_message),
    path('get_messages', views.get_messages),
    path('consult_clicked/<int:consult_pk>/<int:user_pk>', views.consult_clicked)
]
