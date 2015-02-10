
@list of projects ProjectIds, Titles, votes and num comments
getEvent(cityName)

curl http://127.0.0.1:5000/api/v1.0/event/toronto/projectID -X POST -d '{"title":"random", "votes":"24", "num_comments":"10"}' -H "Content-Type: application/json"

curl http://127.0.0.1:5000/api/v1.0/event/toronto -X GET

//Click project

@Return JSON: title, desc, team members[], github, tags[], votes
getProject(ProjectId) 

curl http://127.0.0.1:5000/api/v1.0/project/projectID -X POST -d '{"title":"random", "desc":"blah", "team_members":[{"name":"bob"},{"name":"billy"}], "votes":"24", "tags":["wearable","hardware"], "github":"github_url"}' -H "Content-Type: application/json"

curl http://127.0.0.1:5000/api/v1.0/project/projectID -X GET

@return currentTotal
vote(projectID)


@return profile
getUser(userID)

curl http://127.0.0.1:5000/api/v1.0/users/1 -X GET