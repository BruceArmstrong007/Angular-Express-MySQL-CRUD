const express = require('express');
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
//env variable config
require("dotenv").config();


var app = express();
//change during deployment
const PORT = process.env.CURR_PORT || 3000;
//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//json in express
app.use(express.json());
//intrupt/verify for cross site request
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
  }


app.use(cors(corsOptions));
//secure headers
app.use(helmet(
    {contentSecurityPolicy: false,}
  ));

//Import Routes
const ErrorRoute = require("./routes/error")
const CreateRoute = require("./routes/create");
const ReadRoute = require("./routes/read");
const UpdateRoute = require("./routes/update");
const DeleteRoute = require("./routes/delete");

//Route Middlewares
app.use("",ErrorRoute);
app.use("/create",CreateRoute);
app.use("/read",ReadRoute);
app.use("/update",UpdateRoute);
app.use("/delete",DeleteRoute);

app.listen(PORT,()=>{console.log('Server is Running!')});