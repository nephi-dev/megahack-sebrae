import json
from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from .models import Categories, SubCategories, Consultancies, Messages
from users.models import Users

# Create your views here.


def index(request):
    return HttpResponse('UNDER CONSTRUCTION')


def get_categories(request):
    if request.method == 'GET':
        all_categories = {'categories': list(), 'sub_categories': list()}
        # Adding categories to the dict
        for cat in Categories.objects.values():
            all_categories['categories'].append(cat)

        for sub_cat in SubCategories.objects.values():
            all_categories['sub_categories'].append(sub_cat)

        return JsonResponse(all_categories, json_dumps_params={'ensure_ascii': False})
    else:
        return HttpResponse('Not Allowed Posts')


def get_consults(request):
    if request.method == 'GET':
        all_consults = {'consuntancies': list()}
        # Adding consultancies to the dict
        for cat in Consultancies.objects.values():
            all_consults['consuntancies'].append(cat)

        return JsonResponse(all_consults, json_dumps_params={'ensure_ascii': False})
    else:
        return HttpResponse('Not Allowed Posts')


def create_consult(request, user_pk=None, title=None, desc=None, price=None, category_pk=None, sub_category_pk=None):
    if request.method == 'GET':
        try:
            price = float(price)
            consultancy = Consultancies(
                posted_by=user_pk,
                title=title,
                description=desc,
                price=price,
                category=category_pk,
                sub_category=sub_category_pk
            )
            consultancy.save()
            return HttpResponse('Created consultancy succefuly')
        except Exception as err:
            return HttpResponse(f'An error has occoured: {err}')
    else:
        return HttpResponse('Not Allowed Posts')


def delete_consult(request, consult_pk=None):
    if request.method == 'GET':

        Consultancies.objects.filter(pk=consult_pk).delete()
        return HttpResponse('Deleted consultancy succefuly')
    else:
        return HttpResponse('Not Allowed Posts')


def send_message(request, message=None, consult_pk=None, user_pk=None):
    if request.method == 'GET':
        try:
            msg = Messages(
                consult=consult_pk,
                posted_by=user_pk,
                message=message
            )
            message.save()
            return HttpResponse('Message saved succefuly')
        except Exception as err:
            return HttpResponse(f'An error has occoured: {err}')
    else:
        return HttpResponse('Not Allowed Posts')


def delete_message(request, message_pk=None):
    if request.method == 'GET':

        Messages.objects.filter(pk=message_pk).delete()
        return HttpResponse('Deleted message succefuly')
    else:
        return HttpResponse('Not Allowed Posts')


def get_messages(request):
    if request.method == 'GET':
        all_messages = {'messages': list()}
        # Adding messages to the dict
        for msg in Messages.objects.values():
            all_messages['messages'].append(msg)

        return JsonResponse(all_messages, json_dumps_params={'ensure_ascii': False})
    else:
        return HttpResponse('Not Allowed Posts')


def consult_clicked(request, consult_pk=None, user_pk=None):
    # recomendation represented by "category/sub_category,category/sub_category,category/sub_category"
    if request.method == 'GET':

        consult = Consultancies.objects.get(pk=consult_pk)
        user = Users.objects.get(pk=user_pk)

        cat = Categories.objects.get(pk=consult.category.pk)
        sub_cat = SubCategories.objects.get(pk=consult.sub_category.pk)

        recm = f'{cat}/{sub_cat}'

        atual = user.most_viewed.split(',')
        new_list = ['', '', '', '']

        for i, a in enumerate(atual):
            new_list[i + 1] = a

        for v in enumerate(new_list):
            if not v and i != 0:
                del new_list[i]

        if len(new_list) == 4:
            del new_list[-1]

        new_list[0] = recm
        user.most_viewed = ','.join(new_list)
        user.save()
        return HttpResponse('Registred succefuly')
    else:
        return HttpResponse('Not Allowed Posts')
