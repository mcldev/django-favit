from django.conf.urls import url

urlpatterns = [
    url(r'^add-or-remove$', 'favit.views.add_or_remove'),
    url(r'^remove$', 'favit.views.remove'),
]
