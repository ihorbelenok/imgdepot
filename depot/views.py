from django.shortcuts import render, render_to_response
from django.views.generic.edit import CreateView
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse
from django.template.context import RequestContext
from models import ImageEntry

from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required

from el_pagination.decorators import page_template


# Create your views here.

@page_template('main_page.html')
def main(request,
         template='main.html',
         extra_context=None):
    context = {
        'images': ImageEntry.objects.all(),
    }
    if extra_context is not None:
        context.update(extra_context)
    return render_to_response(template, context, context_instance=RequestContext(request))


class ImageEntryCreate(CreateView):
    model = ImageEntry
    fields = ["image", "sfw"]
    template_name = "ImageEntryCreate.html"

    def get_success_url(self):
        return reverse("upload")

    def form_valid(self, form):
        form.instance.uploader = self.request.user
        return super(ImageEntryCreate, self).form_valid(form)

    @method_decorator(login_required)
    def post(self, request, *args, **kwargs):
        if request.POST.get('cancel-button'):
            return HttpResponseRedirect(reverse('main'))
        else:
            return super(ImageEntryCreate, self).post(request, *args, **kwargs)


def ImageEntryDisplay(request, id=1):
    image = ImageEntry.objects.get(id=id)
    return render(request, "ImageEntryDisplay.html", {"image": image})