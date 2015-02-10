from flask import request
from flask.ext import restful
from flask.ext.restful import fields, marshal_with, reqparse
from firebase import firebase
import os
import json

fb = firebase.FirebaseApplication(os.environ['DB'], None)

# parser = reqparse.RequestParser()
# parser.add_argument(
#     'username', dest='username',
#     type=str , location='json',
#     required=True, help='The user\'s username',
# )
# parser.add_argument(
#     'email', dest='email',
#     type=str, location='json',
#     required=True, help='The user\'s email',
# )

# user_fields = {
#     'username': fields.String,
#     'email': fields.String,
# }

class Users(restful.Resource):

	# @marshal_with(user_fields)
	def get(self, _id):
	    return fb.get('/users/'+_id, None)

	# @marshal_with(user_fields)
	def post(self, _id):
		fb.post('/users/'+_id, request.json)