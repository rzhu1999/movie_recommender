from rest_framework import serializers
from .models import Simrec

class SimrecSerializer(serializers.ModelSerializer):
	class Meta:
		model = Simrec
		fields = '__all__'