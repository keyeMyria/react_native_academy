# -*- coding: utf-8 -*-
from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.relations import HyperlinkedRelatedField

from .models import TODOItem, TODOList


class UserSerializer(serializers.ModelSerializer):
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


class TODOListSerializer(serializers.ModelSerializer):
    class Meta:
        model = TODOList
        fields = ('url', 'id', 'title', 'creator', 'items')
        # fields = ('url', 'id', 'title', 'creator')

    creator = HyperlinkedRelatedField(
        view_name='user-detail',
        read_only=True,
    )

    items = HyperlinkedRelatedField(
        many=True,
        view_name='todoitem-detail',
        read_only=True,
    )


class TODOItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = TODOItem
        fields = ('url', 'id', 'todo_list', 'content', 'completed')

    todo_list = HyperlinkedRelatedField(
        read_only=True,  # Or add a queryset
        view_name='todolist-detail',
    )
