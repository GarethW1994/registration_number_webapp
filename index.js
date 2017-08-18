// Requiring all my dependencies
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('express-flash');
//require mangoose and create a database that takes strings
var mongoose = require('mongoose');
const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/registration_numbers";

var app = express();

mongoose.connect(mongoURL);

var RegistrationSchema = mongoose.Schema({
    regNum: {
        type: String,
        unique: true,
        sparse: true
    }
});

RegistrationSchema.index({
    regNum: 1
}, {
    unique: true
});

var RegistrationNumber = mongoose.model('RegistrationNumber',RegistrationSchema);


app.engine('hbs', exphbs({
    defaultLayout: "main",
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({
    secret: 'keyboard cat',
    cookie: {
        maxAge: 6000 * 30
    }
}));
app.use(flash());


//creating my routes

app.get('/', function(req, res){
  RegistrationNumber.find(function(err, allPlates){
      if (err) {
        console.log(err);
      }

      else {
        res.render('registration_number', {
          regPlate: allPlates.regNum
        })
      }
  });
});

app.post('/', function(req, res){
  var enteredRegNum = req.body.takeReg;

  var plates = new RegistrationNumber({
            regNum: enteredRegNum
        });
        console.log(enteredRegNum);
  plates.save(function(err, allPlates){
    if(err){
      console.log(err);
    }
    else {
      console.log("Registration number successfully added!");
      console.log(allPlates);
      res.redirect('/');
    }
  })
});





//when my server running go to ports 3001 or any available port
const port = process.env.PORT || 3000;

app.listen(port, function(err) {
    if (err) {
        return err;
    } else {
        console.log('server running on port 3000');
    }
});
