const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

Router.post("/",(req,res) => {
    //For displaying details
    mysqlConnection.query("delete from crud where id="+req.body.id,(err,rows)=>{
        if(!err){
            res.status(200).json({success:true,message:"Successfully Removed the User Details!"}); 
        }else{
            (err);
            res.status(400).json({success:false,message:"Error, Try again !"});
        }
    });
});

module.exports = Router;