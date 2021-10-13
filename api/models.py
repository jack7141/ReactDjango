from django.db import models
import string
import random

def generate_unique_code():
    len = 6
    while True:
        code = ''.join(random.choice(string.ascii_uppercase, k=len))
        if Room.objects.filter(code=code).count() == 0:
            break
    return code

class Room(models.Model):
    code = models.CharField(max_length=8, default='', unique=True)
    host = models.CharField(max_length=30, unique=True)
    guest_can_puase = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    created = models.DateTimeField(auto_now_add=True)
