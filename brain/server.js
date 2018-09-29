const express        = require('express');
var router           = express.Router();
var mongoose         = require('mongoose');

const assert         = require('assert');
const bodyParser     = require('body-parser');

const app            = express();

// Change for environment
const port = 8000;
const url = 'mongodb://localhost:27017';
const dbName = 'myproject';

app.use(bodyParser.urlencoded({ extended: true }));



// mongoose.connect('mongodb://localhost/test');
mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("hhi. COnnected to db")
});


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
// var Product = require('../models/Product.js');
var Product = require('./models/Product.js');

// Product.find() etc like above