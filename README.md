# ProjectX

##Key Features

1. User profile with location (force sign-on with GitHub)
2. Sort feed by location
3. Have collections of projects that ambassadors can manage

Pick a vertical i.e. wearables 

Should be invite only (closed beta) to start. Get users from our events

News Feed

Profile with location, interests, github

Event Feed (closed to specific events)

See projects specific to certain events (similar to collections on ProductHunt)

Be able to share projects between events

##Value Props

Find hackers near you with interesting projects

Analogy: Building you "hacker" rock band

Need new content often:
One section is for personal projects
Find projects on Github and post it to the feed, upvoted and contribute to projects (v2)

##Roles and Responsibilities

Shehaaz: Architect Data Model

Nadim: Work with Telescope

Usman: RESTful API to integrate with github

##Installation

###Environment variables
Put the valid Auth client ID in the file server/config/local.env.js, an example file is provided
as /server/config/local.env.sample.js

###Database installation
Install Mongodb, and run mongo on the local computer 

###Dependencies installation
Get the dependencies: in the root directory run

```
sudo bower install & npm install 
```

###Launch
Run the server

```
grunt serve
```
