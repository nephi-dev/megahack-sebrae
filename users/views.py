from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from .models import Users, RateHistory
from consult.models import Consultancies

# Create your views here.


def index(request):
    return HttpResponse('UNDER CONSTRUCTION')


def send_stars(request):
    if request.method == 'POST':
        given_by_pk = request.POST.get('user_pk')
        given_by = Users.objects.filter(pk=given_by_pk)

        colsult_pk = request.POST.get('consult_pk')
        consult = Consultancies.objects.filter(pk=colsult_pk)

        given_to = consult.posted_by
        rh = RateHistory(
            given_by=given_by,
            given_to=given_to,
            consult=consult
        )
        rh.save()

        stars = request.POST.get('stars')
        given_to.stars += int(stars)
        given_to.save()
    else:
        return HttpResponse('Only posts are allowed to this path')
