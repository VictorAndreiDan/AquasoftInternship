const express   = require('express');
const mongoose  = require('mongoose');
const Article   = require('./Article.js');
const app       = express();
const port      = process.env.PORT || 8080;

mongoose.connect("mongodb://localhost/aquasofttema2", ()=> console.log("Connected to MongoDB locally!"), (err)=> console.log("Failed to connect with error: ", err));

// app.listen(port, ()=> console.log(`API WORKING ON PORT ${port}`));
// app.get('/', (request, response)=> response.send("API ROUTE 1"));

