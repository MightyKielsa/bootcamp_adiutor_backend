# BOOTCAMP ADIUTOR

The backend folder for Bootcamp Adiutor, a centralised database for bootcampers to take notes, share resources, and receive help with a built in debugging tool. Built with JavaScript, Node.js and postgress. Tested with supertest and postman.

## Project Status
This project is currently in development. The database currently has 5 tables containing user profile information, resources, notes, topics and a table connecting users that expressed that they're happy to help with a certain topic with the topic itself.

## Project Screen Shots

Main Page:

<img src="https://user-images.githubusercontent.com/104023970/176403269-3dbd2c13-7319-4b39-b838-38032c530933.png" width="400" height="auto">

Resources feature:

<img src="https://user-images.githubusercontent.com/104023970/176405229-cb7ad7d1-a84e-4525-a9e6-1ad28429c3da.png" width="200" height="auto">

## Installation and Setup Instructions

To get the full experience of the app on your computer, first go to [w9_backend-project-chris-angels](https://github.com/SchoolOfCode/w9_backend-project-chris-angels) and follow installation instructions there to set up your server and database.

Clone down this repository. You will need node and npm installed globally on your machine.

### Installation:

npm install

### To Run Test Suite:

npm test

### To Start the App:

npm start

### To Visit App:

localhost:3000

## Reflection
We identified two major problems for bootcampers of School of Code: a lack of long term note storage kept in a centralised database, and a lack of a concrete system for debugging and then asking for help. 

We decided to create a one-stop-shop app for bootcampers to take notes, share resources, and receive help with a built in debugging tool.

The biggest challange while developing this project was the short timeframe of 5 days given to complete it, as well as independent project management that turned out to be more challanging than expected. Trello, Miro and Jamboard proved to be invaluable help to organise our workflow and complete the task on time. Trello was particularly useful for creation and distribution of tickets.

## Tech stack used for this project:
- React
- [React router](https://reactrouter.com/)
- Javascript
- Heroku
- Postgress
- CSS
- [Material UI](https://mui.com/)
- [Express](https://expressjs.com/)
- [Auth0](https://auth0.com/)
- [Jest](https://jestjs.io/)
- [Supertest](https://www.npmjs.com/package/supertest)

We decided to use React due to it's flexibility as well as becasue it was the framework most familiar to all the team members. We supported it with Auth0 API to allow users to log-in securely. Material UI allowed us to implement well designed elements quickly which was a big factor in finishing the project on time. As with react, our choice of testing tools like Jest and Supertest relied on their flexibility and familiarity. On the backend we used PostgreSQL in tandem with Heroku because of their simplicity and cost-free implementation, it allowed us to deploy the server and databases for free with enough database storage capacity for our app's needs.
