from flask import Flask,render_template,send_file	
app = Flask(__name__)

@app.route('/api/stories')
def stories(name=None):
    return send_file('MOCK_DATA.json')

@app.route('/events/montreal/<project>')
def comments(project=None):
    return render_template('comments.html')

@app.route('/events/<event>')
def getevent(event=None):
    return render_template('feed.html')

@app.route('/')
def hello(name=None):
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
