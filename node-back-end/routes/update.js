const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");
//validation
const Joi = require("joi");
const updateSchema = Joi.object({
    driverName : Joi.string().min(3).max(45),
    license : Joi.string().min(10).max(10),
    aadhar: Joi.number().min(12).max(12),
    dob: Joi.date(),
    vehicleNo: Joi.number(),
    salary: Joi.number(),
    rowId: Joi.number().required(),
    updateField: Joi.string().required(),
});
Router.get("/",(req,res) => {
    res.status(200).json({success:true,message:"Connected"});
});

Router.post("/",(req,res) => {
    const { error } = updateSchema.validate(req.body);
    const updateRecord = req.body.driverName || req.body.license || req.body.aadhar || req.body.dob || req.body.vehicleNo || req.body.salary;
    if(error) return res.json({success:false,message:error.details[0].message});
    mysqlConnection.query("update crud set "+req.body.updateField+"='"+updateRecord+"' where id='"+req.body.rowId+"'",(err,rows)=>{  
         if(!err){
              res.status(200).json({success:true,message:"Successfully Updated!"});
          }else{
              res.status(400).json({success:false,message:"Error, Try again !"+err});
          }
        });
});



module.exports = Router;