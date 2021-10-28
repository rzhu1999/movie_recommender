from django.db import models

class Simrec(models.Model):
	title = models.CharField(max_length=100)
	vote_count = models.PositiveIntegerField()
	vote_average = models.FloatField()
	weighted_score = models.FloatField()

	def __str__(self):
		return self.title
