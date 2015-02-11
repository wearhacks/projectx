from flask import request
from flask.ext import restful
from flask.ext.restful import fields, marshal_with, reqparse
from firebase import firebase
from db import fb
import json

class Users(restful.Resource):

	# @marshal_with(user_fields)
	def get(self, _id):
	    return fb.get('/users/'+_id, None)

	# @marshal_with(user_fields)
	def post(self, _id):
		fb.post('/users/'+_id, request.json)