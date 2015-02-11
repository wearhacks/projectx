from flask import request
from flask.ext import restful
from flask.ext.restful import fields, marshal_with, reqparse
from firebase import firebase
from db import fb
import json

class UpVote(restful.Resource):

	def get(self, project_id):
		return fb.get('/project/' + project_id, None)

	def post(self, project_id):
		fb.post('/project/'+ project_id, request.json)