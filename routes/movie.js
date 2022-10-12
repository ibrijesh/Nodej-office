const { Movie, validateMovie , validateMovieId } = require("../models/user");
const express = require("express");
const router = express.Router();

/* GET http://localhost:3000/api/movies */

router.get("/",  async (req, res) => {
    
    const movie = await Movie.find({});

    if(user)
     return res.send(user);
    
    return res.status(404).send([]);
});  



  module.exports=router;