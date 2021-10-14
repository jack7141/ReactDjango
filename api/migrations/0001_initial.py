# Generated by Django 3.2.8 on 2021-10-13 14:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(default='', max_length=8, unique=True)),
                ('host', models.CharField(max_length=30, unique=True)),
                ('guest_can_puase', models.BooleanField(default=False)),
                ('votes_to_skip', models.IntegerField(default=1)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]