from django.db import models
from django.utils import timezone
from django.contrib.auth.hashers import make_password
from consult.models import Consultancies

# Create your models here.


class Users(models.Model):
    name = models.CharField(max_length=256)
    business_name = models.CharField(max_length=256, default='Não Obrigatório')
    user_email = models.EmailField()

    user_password = models.CharField(max_length=555)
    state = models.CharField(max_length=256)

    city = models.CharField(max_length=256)
    image_link = models.CharField(max_length=500)

    most_viewed = models.CharField(max_length=256, default='', blank=True)
    stars = models.PositiveIntegerField(default=0)

    def save(self, **kwargs):
        if type(self.stars) != tuple:
            if not self.user_password.startswith('bcrypt_sha256'):
                self.user_password = make_password(self.user_password)
        else:
            self.stars = self.stars[1]
        super().save(**kwargs)

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def __str__(self):
        return self.name


class PurchasesHistory(models.Model):
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    purchase_date = models.DateField(default=timezone.now)
    consult = models.ForeignKey(Consultancies, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Purchase'
        verbose_name_plural = 'Purchases History'

    def __str__(self):
        return self.consult.title

    def save(self, **kwargs):
        sh = SalesHistory(
            user=self.consult.posted_by,
            sale_date=self.purchase_date,
            consult=self.consult,
            buyer=self.user
        )
        sh.save()
        super().save(**kwargs)


class SalesHistory(models.Model):
    user = models.ForeignKey(
        Users,
        on_delete=models.CASCADE,
        related_name='user'
    )

    sale_date = models.DateField(default=timezone.now)
    consult = models.ForeignKey(Consultancies, on_delete=models.CASCADE)

    buyer = models.ForeignKey(
        Users,
        on_delete=models.CASCADE,
        related_name='buyer'
    )

    class Meta:
        verbose_name = 'Sale'
        verbose_name_plural = 'Sales History'

    def __str__(self):
        return f'{self.user.name} > {self.buyer.name}'


class RateHistory(models.Model):
    given_by = models.ForeignKey(
        Users,
        on_delete=models.CASCADE,
        related_name='given_by'
    )

    given_to = models.ForeignKey(
        Users,
        on_delete=models.CASCADE,
        related_name='given_to'
    )

    consult_from = models.ForeignKey(Consultancies, on_delete=models.CASCADE)
    given_date = models.DateField(default=timezone.now)

    class Meta:
        verbose_name = 'Rate'
        verbose_name_plural = 'Rates'


class Calendar(models.Model):
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    date = models.DateField()
