from flask import request
from flask.ext import restful
from flask.ext.restful import fields, marshal_with, reqparse
from firebase import firebase
from db import fb
import json


class Project(restful.Resource):

	def get(self, _projectID):
	    return fb.get('/projects/'+_projectID, None)

	def post(self, _projectID):
		fb.post('/projects/'+_projectID, request.json)