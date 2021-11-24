from django.db import models

class Simrec(models.Model):
	tmdbId = models.PositiveIntegerField()
	title = models.CharField(max_length=100)
	overview = models.CharField(max_length=2000)
	release_date =  models.CharField(max_length=10)
	vote_count = models.PositiveIntegerField()
	vote_average = models.FloatField()
	weighted_score = models.FloatField()

	def __str__(self):
		return self.title
