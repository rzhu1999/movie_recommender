from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def home(request):
    # return HttpResponse('<div><h1>Nextflex</h1></div>')
    return render(request, 'HQ/HQs.html')


def about(request):
    # return render(request, 'HQ/about.html', )
    return HttpResponse('<h1>About Page</h1>')
