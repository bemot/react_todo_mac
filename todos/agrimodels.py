from django.db import models

class Technologie(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)



    def __str__(self):
        return self.title
# add todo
class Operation(models.Model):
  title = models.CharField(max_length=255)
  technologie_id = models.ForeignKey(Technologie, on_delete=models.CASCADE)
  created_at = models.DateTimeField(auto_now_add=True)
  description = models.TextField()
  activated = models.BooleanField(default=True)
  completed = models.BooleanField(default=False)

  def __str__(self):
    return self.title
