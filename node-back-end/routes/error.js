const express = require("express");
const Router = express.Router();


Router.get("/",(req,res) => {
    res.status(404).json({success:false});
});

module.exports = Router;