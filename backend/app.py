from flask import Flask
from flask.ext import restful
from resources.users import Users
from resources.event import Event
from resources.project import Project
from resources.upvote import UpVote
from resources.hello_world import HelloWorld

app = Flask(__name__)
api = restful.Api(app)

#className, Enpoint, filename
api.add_resource(Users, '/api/v1.0/users/<_id>', endpoint = 'users')
api.add_resource(EventGet, '/api/v1.0/event/<city>','/api/v1.0/event/<city>/<project>', endpoint = 'event')
api.add_resource(Project, '/api/v1.0/project/<project_id>', endpoint = 'project')
api.add_resource(UpVote, '/api/v1.0/upvote/<project_id>', endpoint = 'upvote')
api.add_resource(HelloWorld, '/api', endpoint = 'hello_world')

if __name__ == '__main__':
    app.run(debug=True)
