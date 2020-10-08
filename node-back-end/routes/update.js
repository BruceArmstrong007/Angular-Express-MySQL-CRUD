const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");
//validation
const Joi = require("joi");
const updateSchema = Joi.object({
    driverName : Joi.string().min(3).max(45).required(),
    license : Joi.string().min(10).max(10).required(),
    aadhar: Joi.number().min(12).required(),
    dob: Joi.date().required(),
    vehicleNo: Joi.number().required(),
    salary: Joi.number().required(),
    id: Joi.number().required(),
});
Router.get("/:id",(req,res) => {
    let id = req.params.id;
    mysqlConnection.query("select * from crud where id="+id,(err,rows)=>{  
        if(!err){
             res.status(200).json({success:true,row:rows});
         }else{
             res.status(400).json({success:false,message:"Error, Try again !"+err});
         }
       });
});

Router.post("/",(req,res) => {
    const { error } = updateSchema.validate(req.body);
    if(error) return res.json({success:false,message:error.details[0].message});
    mysqlConnection.query("update crud set driverName='"+req.body.driverName+"',license='"+req.body.license+"',aadhar='"+req.body.aadhar+"',dob='"+req.body.dob+"',vehicleNo='"+req.body.vehicleNo+"',salary='"+req.body.salary+"' where id='"+req.body.id+"'",(err,rows)=>{  
         if(!err){
              res.status(200).json({success:true,message:"Successfully Updated!"});
          }else{
              res.status(400).json({success:false,message:"Error, Try again !"+err});
          }
        });
});



module.exports = Router;