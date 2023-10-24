const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth')
const cors = require('cors');
const saveUserDataRoute = require('./routes/saveUserData');
dotenv.config();
const port = process.env.PORT || 5000;
const DB = process.env.DB;
const app = express();

mongoose.connect(DB,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("DataBase Connected Successfully!!!!");
})
.catch((error)=>{
    console.log("Error : "+error);
})

app.use(cors());
app.use(express.json());
app.use('/api/auth',authRoute);
app.use('/api/saveUserData',saveUserDataRoute);
app.get('/',(req,res)=>{
    res.send("This is My Backend File for SGP 5 SEM")
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})