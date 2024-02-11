from django.shortcuts import render
from django.http import HttpResponse
from transformers import pipeline

pipe = pipeline("summarization", model="Falconsai/text_summarization")

def summarize(request):
    # print(request)
    if request.method == 'POST':
        input_text = request.POST['text']
        summarized_text = pipe(input_text)[0]['summary_text']
        return render(request, "summary.html", {"summarized_text":summarized_text})
    elif request.method == "GET":
        return render(request, 'summary_form.html')
    else:
      return HttpResponse("Method is not allowed!")
      
    