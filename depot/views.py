from django.shortcuts import render
from django.views.generic.edit import CreateView
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse
from models import ImageEntry

from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required

# Create your views here.


def main(request):
  return render(request, "main.html", {})


class ImageEntryCreate(CreateView):
  model = ImageEntry
  fields = ["image", "sfw"]
  template_name = "ImageEntryCreate.html"

  def get_success_url(self):
    return reverse("main")

  def form_valid(self, form):
    form.instance.uploader = self.request.user
    return super(ImageEntryCreate, self).form_valid(form)

  @method_decorator(login_required)
  def post(self, request, *args, **kwargs):
    if request.POST.get('cancel-button'):
      return HttpResponseRedirect(reverse('main'))
    else:
      return super(ImageEntryCreate, self).post(request, *args, **kwargs)

