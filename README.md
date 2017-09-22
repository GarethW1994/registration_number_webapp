# Registration Web Application

 This is the content to expect from the documentation:

1. About the webapp
2. Tech Stack
3. Module/Dependencies
4. Installations
5. How to use the web application
6. What am I missing
7. Contribution


### About the webapp

Registration web application is a app that allows users to enter registration numbers and filter according to a particular city to get registration plates from that city.

This is how the application looks like and you can get to play around the application on: http://registration-backend.herokuapp.com/.

![regnum](https://user-images.githubusercontent.com/22472229/30746316-b888c738-9fa9-11e7-908b-9cad703edf3a.png)

### Tech Stack

The technology that we are using on the application its MongoDB, ExpressJS and NodeJS.

- MongoDB is responsible for ensuring that our data its persistent. To learn more about MongoDB please read up at https://www.mongodb.com/   
- ExpressJS is a NodeJS framework that is responsible for routing with the middle-wares. To learn more about ExpressJS please read up at https://expressjs.com/
- NodeJS is our server for the application. To learn more about NodeJS please read up at https://nodejs.org/

Our application is deployed at heroku so that anyone anywhere can access it.


### Modules/Dependencies

The dependencies that I used on the application is body-parser, express, express-flash, express-handlebars, express-session and mongodb.

- BodyParser is responsible for parsing request bodies in a middleware before your handlers. This is how you install body-parser:
  ```
    $ npm install body-parser
  ```

  this is how you require the API:
  ```
    var bodyParser = require('body-parser');
  ```
