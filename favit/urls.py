from django.conf.urls import url
from favit.views import *


urlpatterns = [
    url(r'^add-or-remove$', add_or_remove),
    url(r'^remove$', remove),
]
