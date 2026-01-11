from django.db import models

# Create your models here.
class Client(models.Model):
    """
    Represents a client in the system.

    Attributes:
        name (str): The name of the client.
        start_date (date): The date the client started.
        status (str): The current status of the client.
    """
    name = models.CharField(max_length=100)
    start_date = models.DateField()
    status = models.BooleanField(default=True)

    def __str__(self):
        return str(self.name)