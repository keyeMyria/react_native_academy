from django.contrib.auth.models import User
from rest_framework import permissions, viewsets

from .models import TODOItem, TODOList
from .serializers import TODOItemSerializer, TODOListSerializer, UserSerializer


class UserViewSet(viewsets.ModelViewSet):

    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_permissions(self):
        """
        Instantiates and returns the list of permissions that this view requires.
        """
        if self.action == 'create':
            # Registration is open for all users
            permission_classes = [permissions.AllowAny]
        else:
            permission_classes = [permissions.IsAuthenticated]
        return [permission() for permission in permission_classes]


class TODOListViewSet(viewsets.ModelViewSet):

    serializer_class = TODOListSerializer
    queryset = TODOList.objects.all()

    def perform_create(self, serializer):
        """Every TODOList is implicitly connected to the currently logged in user."""
        serializer.save(creator=self.request.user)


class TODOItemViewSet(viewsets.ModelViewSet):

    serializer_class = TODOItemSerializer

    def get_queryset(self):
        return TODOItem.objects.filter(todo_list=self.kwargs['list_pk'])

    def perform_create(self, serializer):
        """Every TODOItem is implicitly connected to the currently edited TODOList."""
        serializer.save(todo_list_id=self.kwargs['list_pk'])

