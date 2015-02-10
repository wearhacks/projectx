#Create project in event

``curl http://127.0.0.1:5000/api/v1.0/event/toronto/projectID -X POST -d '{"title":"random", "votes":"24", "num_comments":"10"}' -H "Content-Type: application/json"``

#get all projects from event

``curl http://127.0.0.1:5000/api/v1.0/event/toronto -X GET``

----

#Create and Get Project

``curl http://127.0.0.1:5000/api/v1.0/project/projectID -X POST -d '{"title":"random", "desc":"blah", "team_members":[{"name":"bob"},{"name":"billy"}], "votes":"24", "tags":["wearable","hardware"], "github":"github_url"}' -H "Content-Type: application/json"``

``curl http://127.0.0.1:5000/api/v1.0/project/projectID -X GET``

----
#Create User

``curl http://127.0.0.1:5000/api/v1.0/users/1 -X -POST -d '{"name":"bob","age":15"}' -H "Content-Type: application/json"``

#Get User

``curl http://127.0.0.1:5000/api/v1.0/users/1 -X GET``


#To Do
upVote(projectID)
