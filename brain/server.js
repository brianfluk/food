const express        = require('express');
var router           = express.Router();
const mongoose       = require('mongoose');

const assert         = require('assert');
const bodyParser     = require('body-parser');

const app            = express();

// ===== Change for environment =====
const port = 8000;
const url = 'mongodb://localhost:27017';
const mongooseUrl = 'mongodb://localhost:27017/test';
// ==================================
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(mongooseUrl);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // Connected to database
    console.log("hhi. COnnected to db");

    // listen to port
    require('./routes/routes.js')(app, db);
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });   

});


// BELOW ARE JUST SOME NOTES ON HOW TO INTERACT WITH MONGODB THRU MONGOOSE

/** EXAMPLE: creating the schema/ model in server.js  */
// var kittySchema = new mongoose.Schema({
//     name: String
// });

// // NOTE: methods must be added to the schema before compiling it with mongoose.model()
// kittySchema.methods.speak = function () {
//     var greeting = this.name
//       ? "Meow name is " + this.name
//       : "I don't have a name";
//     console.log(greeting);
//   }
  
// var Kitten = mongoose.model('Kitten', kittySchema); // compiling with mongoose.model

// var silence = new Kitten({ name: 'Silence' });
// console.log(silence.name); // 'Silence'

// var fluffy = new Kitten({ name: 'fluffy' });
// fluffy.speak(); // "Meow name is fluffy"

// // store kittens by save
// fluffy.save(function (err, fluffy) {
//     if (err) return console.error(err);
//     fluffy.speak();
//   });

// // display all kittens we have seen stored
//   Kitten.find(function (err, kittens) {
//     if (err) return console.error(err);
//     console.log(kittens);
//   })

// // display with filter
// Kitten.find({ name: /^fluff/ }, callback);



/** EXAMPLE: importing the model  */
// var Product = require('./models/Product.js');

// Product.find() etc like above