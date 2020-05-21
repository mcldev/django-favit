from django.conf.urls import url

from favit.views import add_or_remove, remove

urlpatterns = [
    url(r'^add-or-remove$', add_or_remove, name='favit.views.add_or_remove'),
    url(r'^remove$', remove, name='favit.views.remove'),
]
