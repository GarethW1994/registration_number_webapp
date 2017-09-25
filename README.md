# Registration Web Application

 This is the content to expect from the documentation:

1. About the webapp
1. Tech Stack
1. Module/Dependencies
1. What am I missing?
1. Contribution
1. How developers can use this web application
    - Instalations
    - Runnning the web application

## About the webapp

Registration web application is a app that allows users to enter registration numbers and filter according to a particular city to get registration plates from that city.

This is how the application looks like and you can get to play around the application on: http://registration-backend.herokuapp.com/.

![regnum](https://user-images.githubusercontent.com/22472229/30746316-b888c738-9fa9-11e7-908b-9cad703edf3a.png)

## Tech Stack

The technology that we are using on the application its MongoDB, ExpressJS and NodeJS.

- MongoDB is responsible for ensuring that our data its persistent. To learn more about MongoDB please read up at https://www.mongodb.com/   
- ExpressJS is a NodeJS framework that is responsible for routing with the middle-wares. To learn more about ExpressJS please read up at https://expressjs.com/
- NodeJS is our server for the application. To learn more about NodeJS please read up at https://nodejs.org/

Our application is deployed at heroku so that anyone anywhere can access it.


## Modules/Dependencies

The dependencies that I used on the application is body-parser, express, express-flash, express-handlebars, express-session and mongoose. This is where you can find and read more about each packages, https://www.npmjs.com.

- BodyParser is responsible for parsing request bodies in a middleware before your handlers. This is how you install body-parser:

- Express is a web framework for node.

- Express-flash is responsible for making for creating flash messages, to make the application interactive.

- Express-handlebars is responsible for creating templates.

- Express-session is an express middleware that stores sessions.

- Mongoose it helps us to facilitate the communication between our application and the mongo database.


## What am I missing?

- I didnt do any test on on my application, you may need to install mocha or any testing of your choice and do test to make sure every function on the application does what its intended for.
- I didn't do toUpperCase to make sure that my registration plates when they are rendered to the screen are I displayed in capital letters.

What else am I missing? Nothing is impossible, everything its better in its beta form. Feel free to contribute if you feel there is something I didn't do.

## Contribution

If you'd love to contribute and make the application better:

1. Create an issue and tell me about the idea (maybe I can help).
1. Fork the application to your github account so that you'll have rights to commit and push.
1. Clone your forked version of the application to your local machine.
-   To clone the application you click on the clone/download button, copy the web URL and run the clone command on your terminal.
```
git clone URL
```

## How developers can use this web application

### Installations

#### NodeJS

You first need to check if you have any node version on your machine by running this command:
```
node -v
```

if you don't have have nodejs on your machine, follow the commands on this [link]:(https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)


#### NPM

Run this command on your terminal to install all the packages installed on the application:
```
npm install
```

#### Mongo

If you don't have mongo installed on your local machine, follow the commands on this [link](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-mongodb-on-ubuntu-16-04) (this only works for ubuntu-16-04 distributions). By installing this this will allow you to save the registration plates on the database.



### Runnning the web application

On your cloned application, run this command on your terminal:
```
nodemon index.js
```

This commanding will start running the express server and will log a port on which the application is running on, ofwhich in this case its port 3000.

On your browser go to http://localhost:3000 thats where you'll be able to see the application
