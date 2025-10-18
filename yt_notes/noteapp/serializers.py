from rest_framework import serializers
from .models import Note
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["id","user","title","body","slug","category","created","updated"]
        read_only_fields = ['user', 'slug']  

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2', 'email', 'first_name', 'last_name')
        extra_kwargs = {
            'first_name': {'required': False},
            'last_name': {'required': False},
            'email': {'required': False}
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return attrs

    def create(self, validated_data):
        validated_data.pop('password2')
        user = User.objects.create_user(**validated_data)
        return user