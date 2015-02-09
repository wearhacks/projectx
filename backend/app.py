import os
from flask import Flask, request, render_template, url_for, redirect, session, g
from firebase import firebase


app = Flask(__name__)

fb = firebase.FirebaseApplication(os.environ['DB'], None)


@app.route('/')
def index():
	return "hello world"

@app.route('/getUser/<id>')
def getUser(id):
	return fb.get('/users/'+id, None)

@app.route('/addUser/<id>', methods = ['POST'])
def addUser(id):
	contentType = request.headers['Content-Type']
	if contentType == 'application/json':
    	 data = json.dumps(request.json)
    	 firebase.post('/users/'+id, data)
         return "JSON Message: " + data
	else:
         return "415 Unsupported Media Type" + contentType	


if __name__ == '__main__':
    app.debug = True	
    app.run(host='127.0.0.1')	