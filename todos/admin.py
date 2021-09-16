from django.contrib import admin

# Register your models here.
from .models import Todo # add this
from .models import Author
class TodoAdmin(admin.ModelAdmin):  # add this
  list_display = ('id','author','task','created_at') # add this
class AuthorAdmin(admin.ModelAdmin):
  list_display = ('id','author')
# Register your models here.
admin.site.register(Todo, TodoAdmin) # add this
admin.site.register(Author, AuthorAdmin)



