from flask import Flask, request, render_template, url_for, redirect, session, g

app = Flask(__name__)

@app.route('/')
def index():
	return "hello world"


if __name__ == '__main__':
    app.debug = True	
    app.run(host='127.0.0.1')	