import json
from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from .models import Categories, SubCategories, Consultancies

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

##########
#--TODO--#
# CREATE A RECOMENDATION SYSTEM #
##########
