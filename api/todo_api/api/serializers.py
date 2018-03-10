# -*- coding: utf-8 -*-
from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'password', 'email', 'groups')

    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        """Overrides the create call since by default DRF doesn't accept password.

        Instead, DRF expects this endpoint to be called just like any other Resource, where you
        need to be authenticated to create it. We, however, need an anon register endpoint (POST)
        """
        user = User.objects.create(
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()

        return user

