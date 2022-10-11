const config = require("config");
const Joi = require("joi");
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/Project')  
   .then(()=>console.log('Connected to MongoDB'))
   .catch(err=>console.log('Could not connect to MongoDB..',err));

//    "id": 1,
//    "movieName": "Avatar",
//    "Year": "2009",
//    "Released": "18 Dec 2009",
//    "Runtime": "162 min",
//    "Director": "James Cameron",
//    "Writer": "James Cameron",
//    "Language": "English, Spanish",
//    "Country": "USA, UK",
//    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//    "Metascore": "83",
//    "imdbRating": "7.9",
//    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//    "imagePath": "assets/1.jpg",
//    "Genre": "Action, Adventure, Fantasy",
//    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang"

const movieSchema = new mongoose.Schema({
  movieName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255,
    unique: true
  },
  Year: {
    type: String,
    required: true,
  },
  Released: {
    type: String,
    required: true,
  },
  Runtime: {
    type: String,
    required: true
  },
  Director: {
    type: String,
    required: true
  },
  Writer: {
    type: String,
    required: true
  },
  Language: {
    type: String,
    required: true
  },
  Country: {
    type: String,
    required: true
  },
  Awards: {
    type: String,
    required: true
  },
  Metascore: {
    type: String,
    required: true
  },
  imdbRating: {
    type: String,
    required: true
  },
  Plot: {
    type: String,
    required: true
  },
  imagePath: {
    type: String,
    required: true
  },
  Genre: {
    type: String,
    required: true
  },
  Actors: {
    type: String,
    required: true
  }

});


const User = mongoose.model("User", userSchema);

function validateUser(user) {

  const schema = Joi.object({
    movieName: Joi.string()
    .min(1)
    .max(255)
    .required(),
    Year: Joi.string()
      .required(),
    Released: Joi.string().length(10)
    .pattern(/^[0-9]+$/).required(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  });

  return schema.validate(user);
}


function validateUserLogin(user) {

  const schema = Joi.object({
    email: Joi.string()
    .min(5)
    .max(255)
    .required()
    .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  });

  return schema.validate(user);
}


exports.User = User;
exports.validate = validateUser;
exports.validateLogin = validateUserLogin;
