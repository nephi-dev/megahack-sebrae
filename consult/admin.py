from django.contrib import admin
from .models import Categories, Consultancies, SubCategories

# Register your models here.
admin.site.register(Categories)
admin.site.register(Consultancies)
admin.site.register(SubCategories)
