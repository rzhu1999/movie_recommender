# Generated by Django 3.2.8 on 2021-12-02 21:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userupload', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='rating',
            field=models.PositiveIntegerField(null=True),
        ),
    ]