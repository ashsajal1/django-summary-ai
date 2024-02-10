from django.shortcuts import render
from django.http import HttpResponse
# Use a pipeline as a high-level helper
from transformers import pipeline

pipe = pipeline("summarization", model="Falconsai/text_summarization")

# Create your views here.
def summarize(request):
  summarized_text = pipe("This si a sample text")[0]['summary_text']
  return HttpResponse(summarized_text)


    