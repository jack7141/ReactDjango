
from django.shortcuts import render
from django.views.generic import ListView, DetailView, View
from rest_framework.response import Response
from rest_framework import generics
import urllib.request
import json

URL = "http://127.0.0.1:8000/api/todo/"


def Home(request):
    # data = request.GET['title']
    RequestApiServer = urllib.request.Request(URL)
    response = urllib.request.urlopen(RequestApiServer)
    # rescode = response.getcode()
    ResponseBody = response.read()
    result = json.loads(ResponseBody.decode('utf-8'))

    return render(request, "todos/todo_list.html", {'result': result})


def Search(request):
    SearchBar = int(request.GET.get('Titleid', 0))
    print(SearchBar)
    pass
    # return render(request, "todos/todo_list.html", {'result': result})


'''
class HomeView(ListView):
    model = Cafe
    paginate_by = 10
    paginate_orphans = 5
    ordering = 'created'

    # 기존 Html로 넘어가는 context의 이름을 변경함 object_list -> cafes
    context_object_name = 'cafes'

    def get_context_data(self, **kwargs):
        # 요소 추가로 전달하고 싶을때 사용
        # print(City.continent.objects.all())
        context = super().get_context_data(**kwargs)
        context["cityList"] = City.objects.all()
        return context
'''
