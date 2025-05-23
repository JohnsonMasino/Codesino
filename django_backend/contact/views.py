from rest_framework import viewsets
from .models import Contact
from .serializers import ContactSerializer

# Create your views here.
class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all().order_by('-submitted_at')
    serializer_class = ContactSerializer
    