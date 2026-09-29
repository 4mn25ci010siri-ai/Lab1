from django.db import models

# Create your models here.
#Table productMaster
class productMaster(models.Model):
    productid=models.AutoField(primary_key=True)
    productname=models.CharField(max_length=150)
    description=models.CharField(max_length=200)
    price=models.CharField(max_length=50)
