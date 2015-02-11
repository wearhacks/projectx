from flask import request
from flask.ext import restful
from flask.ext.restful import fields, marshal_with, reqparse
from firebase import firebase
from db import fb
import json

class Event(restful.Resource):

	def get(self, _city):
		return fb.get('/event/'+_city, None)

	def post(self, _city, _project):
		fb.post('/event/'+ _city + '/' + _project, request.json)