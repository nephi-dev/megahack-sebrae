from django.http import JsonResponse, HttpResponse

from . import qr_generator

# Create your views here.


def image(request):
    live_link = request.GET.get('live_link')
    if live_link != None:
        image = qr_generator.create_qr(live_link)
        if image == None:
            return HttpResponse("There's no livestream link in your post")

        response = HttpResponse(content_type='image/png')
        image.save(response, 'PNG')
        return response
    else:
        return HttpResponse("There's no livestream link in your post")


def index(request):
    return HttpResponse('Access /qrapi or /usersapi or /consultapi to use our api')
