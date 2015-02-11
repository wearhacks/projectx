from flask import Flask,render_template,send_file	
app = Flask(__name__)

@app.route('/api/stories')
def stories(name=None):
    return send_file('MOCK_DATA.json')

@app.route('/comments/')
def comments(name=None):
    return render_template('comments.html')

@app.route('/')
def hello(name=None):
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
