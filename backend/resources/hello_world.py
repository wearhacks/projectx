from flask.ext import restful
from flask.ext.restful import fields, marshal_with, reqparse
from firebase import firebase

fb = firebase.FirebaseApplication(os.environ['DB'], None)

class HelloWorld(restful.Resource):
    def get(self):
        return {'hello': 'world'}

    def post(self):
        pass
