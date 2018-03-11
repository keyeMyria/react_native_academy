from django.contrib.auth.models import User
from django.db import models


class TODOList(models.Model):

    class Meta:
        ordering = ['id']

    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=225, help_text='The name of the TODO List')


class TODOItem(models.Model):

    class Meta:
        ordering = ['id']

    todo_list = models.ForeignKey(TODOList, related_name='items', on_delete=models.CASCADE)
    content = models.TextField(help_text='What has to be done?')
    completed = models.BooleanField(default=False)
