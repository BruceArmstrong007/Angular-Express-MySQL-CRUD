const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");
//validation
const Joi = require("joi");
const createSchema = Joi.object({
    driverName : Joi.string().min(3).max(45).required(),
    license : Joi.string().min(10).max(10).required(),
    aadhar: Joi.number().min(12).required(),
    dob: Joi.date().required(),
    vehicleNo: Joi.number().required(),
    salary: Joi.number().required(),
});
Router.get("/",(req,res) => {
    res.status(200).json({success:true,message : "Connected"});
});
Router.post("/",async(req,res) => {
    const { error } = createSchema.validate(req.body);
    if(error) return res.json({success:false,message:error.details[0].message});
    mysqlConnection.query("insert into crud values(FLOOR(RAND()*(999999999-1+1))+1,'"+req.body.driverName+"','"+req.body.license+"','"+req.body.aadhar+"','"+req.body.dob+"','"+req.body.vehicleNo+"','"+req.body.salary+"');",(err)=>{  
         if(!err){
              res.status(200).json({success:true,message:"Successfully Added!"});
          }else{
              console.log(err);
              res.status(400).json({success:false,message:"Error, Try again !"});
          }
    });
});


module.exports = Router;