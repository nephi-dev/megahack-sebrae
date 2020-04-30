from django.contrib import admin
from .models import Users, PurchasesHistory, SalesHistory, Calendar


# Register your models here.
admin.site.register(Users)
admin.site.register(SalesHistory)
admin.site.register(PurchasesHistory)
admin.site.register(Calendar)
