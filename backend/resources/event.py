from flask import request
from flask.ext import restful
from flask.ext.restful import fields, marshal_with, reqparse
from firebase import firebase
from db import fb
import json

class Event(restful.Resource):

	def get(self, city):
		return fb.get('/event/' + city, None)

	def post(self, city, project):
		fb.post('/event/'+ city + '/' + project, request.json)