from flask import request
from flask.ext import restful
from flask.ext.restful import fields, marshal_with, reqparse
from firebase import firebase
from db import fb
import json

class EventGet(restful.Resource):

	def get(self, _city):
	    return fb.get('/event/'+_city, None)