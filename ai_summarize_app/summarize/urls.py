from django.urls import path
from . import views

urlpatterns = [
    path("summary/", views.summarize, name="summary")
]
