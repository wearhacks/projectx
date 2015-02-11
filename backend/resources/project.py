from flask import request
from flask.ext import restful
from flask.ext.restful import fields, marshal_with, reqparse
from firebase import firebase
from db import fb
import json


class Project(restful.Resource):

	def get(self, project_id):
	    return fb.get('/projects/'+project_id, None)

	def post(self, project_id):
		fb.post('/projects/'+project_id, request.json)