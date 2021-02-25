const router=require("express").Router();
const User=require("../models/userModel");

router.get("/",(req,res)=>{
    User.find()
    .then(users=> res.json(users))
    .catch(err=> res.status(400).json("Error: "+err));
});

router.post("/add",(req,res)=>{
    const user=new User({
        username:req.body.username
    });
    user.save()
    .then(()=>res.json("User added!"))
    .catch(err=>res.status(400).json("Error: "+err));
});


module.exports=router;