const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

Router.get("/",(req,res) => {
        //For displaying details
        mysqlConnection.query("Select * from crud",(err,rows)=>{
            if (rows.length == 0) {
                return res.status(400).json({success:false,message:"Error, Try again !"+err});
            }
            if(!err){
                res.status(200).json({success:true,rows:rows}); 
            }else{
                (err);
                res.status(400).json({success:false,message:"Error, Try again !"+err});
            }
        });
});



module.exports = Router;