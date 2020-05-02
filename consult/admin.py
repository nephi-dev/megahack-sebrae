from django.contrib import admin
from .models import Categories, Consultancies, SubCategories, Messages

# Register your models here.
admin.site.register(Categories)
admin.site.register(Consultancies)
admin.site.register(SubCategories)
admin.site.register(Messages)
