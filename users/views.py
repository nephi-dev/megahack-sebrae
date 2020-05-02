from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from .models import Users, RateHistory
from consult.models import Consultancies
from django.contrib.auth.hashers import check_password

# Create your views here.


def index(request):
    return HttpResponse('UNDER CONSTRUCTION')


def send_stars(request, consult_pk=None, user_pk=None, stars=None):
    if request.method == 'GET':
        given_by_pk = user_pk
        given_by = Users.objects.filter(pk=given_by_pk)

        colsult_pk = consult_pk
        consult = Consultancies.objects.filter(pk=colsult_pk)

        given_to = consult.posted_by
        rh = RateHistory(
            given_by=given_by,
            given_to=given_to,
            consult=consult
        )
        rh.save()
        given_to.stars = (given_to.stars, int(stars))
        given_to.save()
        return HttpResponse(f'Succefuly send {stars} star(s) to {given_to}')
    else:
        return HttpResponse('Not Allowed Posts')


def get_users(request):
    if request.method == 'GET':
        all_users = {'users': list()}
        # Adding Users to the dict
        for user in Users.objects:
            new_dict = dict()
            for key, val in user.values().items():
                if key != 'user_password':
                    new_dict[key] = val
            all_users['users'].append(new_dict)
        return JsonResponse(all_users)
    else:
        return HttpResponse('Not Allowed Posts')


def login(request, user_email=None, user_pass=None):
    if request.method == 'GET':
        user_email = user_email
        user_pass = user_pass
        users = Users.objects.filter(user_email__exact=user_email)

        ok = False
        for user in users:
            if check_password(user_pass, user.user_password):
                ok = True
                user_pk = user.pk

                break

        if ok:
            user = Users.objects.filter(pk=user_pk).values()
            user_dict = dict()
            for key, val in user[0].items():
                if key != 'user_password':
                    user_dict[key] = val

            return JsonResponse({'can_login': True, 'user': user_dict}, json_dumps_params={'ensure_ascii': False})
        else:
            return JsonResponse({'can_login': False})
    else:
        return HttpResponse('Not Allowed Posts')


def create_user(request, name=None, business_name=None, user_email=None, user_password=None, state=None, city=None, image_link=None):
    if request.method == 'GET':
        if business_name == None:
            business_name = 'Não se Aplica'
        try:
            user = Users(
                name=name,
                business_name=business_name,
                user_email=user_email,
                user_password=user_password,
                state=state,
                city=city,
                image_link=image_link
            )
            user.save()
            return HttpResponse('Created user succefuly')
        except Exception as err:
            return HttpResponse(f'An error has occoured: {err}')
    else:
        return HttpResponse('Not Allowed Posts')


def delete_user(request, user_pk):
    if request.method == 'GET':

        Users.objects.filter(pk=user_pk).delete()
        return HttpResponse('Delected user succefuly')
    else:
        return HttpResponse('Not Allowed Posts')
