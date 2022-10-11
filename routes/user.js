const { User, validateUser , validateLogin } = require("../models/user");
const express = require("express");
const router = express.Router();

/* GET http://localhost:3000/api/users?email=<emailid> */

router.get("/",  async (req, res) => {
    const json = req.query
    const emailId=json.email

    const user = await User.find({email:emailId}).select("-password");

    if(user)
     return res.send(user);
    
    return res.status(404).send([]);
});  


/* POST http://localhost:3000/api/users */

router.post("/", async (req, res) => {
    const { error } = validateUser(req.body);

    console.log(req.body);

    if (error) 
    return res.status(400).send(error.details[0].message);
  
    user = new User(req.body);

    let result = await user.save();
    delete result.password
    res.send(result);
    
});


/* GET http://localhost:3000/api/users?email=<emailid>&&password=<password> */

router.get("/login", async (req, res) => {
    const { error } = validateLogin(req.query);

    console.log(req.query);
    const userEmail=req.query.email;
    const userPassword=req.query.password;

    if (error) 
    return res.status(400).send(error.details[0].message);

    const user = await User.find({email:userEmail,password:userPassword});
  
    return user?res.send(user):res.status(404).send("Email and Password do not match");
    
  });


  module.exports=router;