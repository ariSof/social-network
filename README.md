# Social-Network
API for a Social Network

## Description

Backend setup for a Social Network site that would have Users, who would have a list of friends, or post a thought. And which thoughts might have Reactions to.

Video walkthrough: https://www.awesomescreenshot.com/video/25157897?key=fc65020fb5a9a16a66f6f0356090e3f8

## Installation

* npm i 
* node index.js
* test routes in Insomnia

## Usage

Run node index.js in the command line. Then use postmates or Insomnia to test the different routes. Five routes are available for each Users, and Thoughts. GET route to view all, GET route to view one by id, POST route to add a new (User, Thought) with included JSON data, PUT route to update an existing one by id, and DELETE route by id. Two additional routes are available for each, POST to add a new Friend or Reaction, and DELETE to remove a Friend or a Reaction to a thought.

## License

MIT 