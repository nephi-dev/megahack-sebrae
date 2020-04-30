from django.contrib import admin
from .models import Users, PurchasesHistory, SalesHistory


# Register your models here.
admin.site.register(Users)
admin.site.register(SalesHistory)
admin.site.register(PurchasesHistory)
