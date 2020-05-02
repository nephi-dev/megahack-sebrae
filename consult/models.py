from django.db import models
from django.utils import timezone
# Create your models here.


class Categories(models.Model):
    category_name = models.CharField(max_length=50)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.category_name


class SubCategories(models.Model):
    category_father = models.ForeignKey(Categories, on_delete=models.CASCADE)
    sub_category_name = models.CharField(max_length=50)

    class Meta:
        verbose_name = 'Sub Category'
        verbose_name_plural = 'Sub Categories'

    def __str__(self):
        return self.sub_category_name


class Consultancies(models.Model):
    posted_by = models.ForeignKey('users.Users', on_delete=models.CASCADE)

    title = models.CharField(max_length=30)
    description = models.CharField(max_length=256)
    price = models.FloatField(default=0.00)

    category = models.ForeignKey(Categories, on_delete=models.CASCADE)
    sub_category = models.ForeignKey(SubCategories, on_delete=models.CASCADE)

    post_date = models.DateField(default=timezone.now)

    class Meta:
        verbose_name = 'Consultancy'
        verbose_name_plural = 'Consultancies'

    def __str__(self):
        return self.title


class Messages(models.Model):
    consult = models.ForeignKey(Consultancies, on_delete=models.CASCADE)
    message = models.CharField(max_length=256)

    posted_by = models.ForeignKey('users.Users', on_delete=models.CASCADE)
    post_date = models.DateField(default=timezone.now)

    class Meta:
        verbose_name = 'Message'
        verbose_name_plural = 'Messages'

    def __str__(self):
        return f'{self.posted_by} > {self.consult}'
