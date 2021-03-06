# Generated by Django 3.2.8 on 2021-11-24 01:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Simrec',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tmdbId', models.PositiveIntegerField()),
                ('title', models.CharField(max_length=100)),
                ('overview', models.CharField(max_length=2000)),
                ('release_date', models.CharField(max_length=10)),
                ('vote_count', models.PositiveIntegerField()),
                ('vote_average', models.FloatField()),
                ('weighted_score', models.FloatField()),
            ],
        ),
    ]
