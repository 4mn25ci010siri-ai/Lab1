from rest_framework import serializers
from .models import*

class productMasteeSerializer(serializers.ModelSerializer):
    class Meta:
        model=productMaster
        fields:['productid','productname','description','price']
