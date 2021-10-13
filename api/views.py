from django.shortcuts import render
from django.views.generic import ListView
from django.http import HttpResponse
# class HomeView(ListView):
#     pass


def HomeView(request):
    return HttpResponse('Test')