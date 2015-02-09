import os
from flask import Flask, request, render_template, url_for, redirect, session, g
from firebase import firebase


app = Flask(__name__)

firebase = firebase.FirebaseApplication(os.environ['DB'], None)

result = firebase.get('/hello', None)
print result

data = {'name': 'Ozgur Vatansever'}

firebase.post('/users/1', data)


@app.route('/')
def index():
	return "hello world"

@app.route('/getUser/<id>')
def getUser(id):
	return firebase.get('/users/'+id)

@app.route('/addUser/<id>', methods = ['POST'])
def addUser(id):

    if request.headers['Content-Type'] == 'application/json':
    	data = json.dumps(request.json)
    	firebase.post('/users/'+id, data)
        return "JSON Message: " + data
    else:
        return "415 Unsupported Media Type ;)"		


if __name__ == '__main__':
    app.debug = True	
    app.run(host='127.0.0.1')	