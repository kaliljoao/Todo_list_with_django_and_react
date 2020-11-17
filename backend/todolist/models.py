from django.db import models

class Task(models.Model):
    TASK_PRIORITIES = (
        (1, 'DANGER'),
        (2, 'WARNING'),
        (3, 'RELAX'),
    )
    Description = models.CharField(null=False, max_length=300)
    Priority = models.IntegerField(null=True, choices=TASK_PRIORITIES)
    ExecutionDate = models.DateTimeField()
