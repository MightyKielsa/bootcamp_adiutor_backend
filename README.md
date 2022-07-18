# BOOTCAMP ADIUTOR

The backend folder for Bootcamp Adiutor, a centralised database for bootcampers to take notes, share resources, and receive help with a built in debugging tool. Built with JavaScript, Node.js and postgress. Tested with supertest and postman.

## Live Link
[here](https://frabjous-bonbon-a6e839.netlify.app/)

## Project Status
This project is currently in development. The database currently has 5 tables containing user profile information, resources, notes, topics and a table connecting users that expressed that they're happy to help with a certain topic with the topic itself.

## Project Screen Shots

Main Page:

<img src="https://user-images.githubusercontent.com/104023970/176403269-3dbd2c13-7319-4b39-b838-38032c530933.png" width="400" height="auto">

Resources feature:

<img src="https://user-images.githubusercontent.com/104023970/176405229-cb7ad7d1-a84e-4525-a9e6-1ad28429c3da.png" width="200" height="auto">

## Installation and Setup Instructions

To get the full experience of the app on your computer after starting the backend, visit [w9_frontend-project-chris-angels](https://github.com/SchoolOfCode/w9_frontend-project-chris-angels) and follow installation instructions there to set up the frontend react-app.

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

## Guidlines for setting up a heroku database:
1. After creating your Heroku profile, go to the upper right corner and click "New". 

<img src="https://user-images.githubusercontent.com/104023970/176413067-04db2da7-1340-4abc-9482-1204f638df25.png" width="800" height="auto">
______________________________________________________________________________________________________________________

2. From the dropdown list select "Create New App".

<img src="https://user-images.githubusercontent.com/104023970/176413076-d7e2b0d3-bc72-4796-80fc-54b65cf281f8.png" width="300" height="auto">
______________________________________________________________________________________________________________________

3. Type in a name for your databse (1) and select the region you're based in and then click "Create App".

<img src="https://user-images.githubusercontent.com/104023970/176413080-62b3fa1a-6f25-4e34-b7d4-69b9fb22583a.png" width="500" height="auto">
______________________________________________________________________________________________________________________

4. Now go to the "Resources" tab (1) and in the "Add ons" section search for Heroku Postgress (2), then click "Submit Order Form" in the pop-up window. 

<img src="https://user-images.githubusercontent.com/104023970/176416317-f53451bd-c2b6-4ad8-9aeb-50b1fc78166c.png" width="700" height="auto">
______________________________________________________________________________________________________________________

5. This should set up your database, now you can go to settings of the app and click "view credentials" (Host, database, user, port and password).

<img src="https://user-images.githubusercontent.com/104023970/176417608-5d89cd9a-abe9-4d71-ad70-b607452a64e8.png" width="800" height="auto">
______________________________________________________________________________________________________________________

6. In the cloned repository create a .env file in the main folder.
______________________________________________________________________________________________________________________

7. In the file prepare variables as follows and fill them with coresponding credentials from the app: 
  
PGUSER=xxxxxxxxxxxxxx

PGHOST=xxx-xx-xxx-xx-xxx.xx-xxxxt-x.xxxxx.xxxxx.xxx

PGPORT=xxxx

PGPASSWORD=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

PGDATABASE=xxxxxxxxxxx
______________________________________________________________________________________________________________________

8.You're all set up to use the server and the databse! To load mock data to your databse use following commands in the console in the folder of the app:

db:createTable  - to create the necessary tables.

db:populateTable - to populate them

db:deleteAllTables - to discard them
