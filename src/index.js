require('dotenv').config({path:'./config.env'});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 4002;

const staffRoute = require("./routes/staffRoute");

const app = express();
app.use(cors());
app.use(bodyParser.json());

require("./db")(app);

// localhost:4000/staff
app.use("/staff",staffRoute);

app.get("/",(req,res)=>{
    res.send("Hello Index");
});

app.listen(port,()=>{
    console.log("App is running on port " + port);
});
