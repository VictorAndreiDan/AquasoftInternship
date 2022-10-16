const express   = require('express');
const app       = express();
const port      = process.env.PORT || 8080;

app.listen(port, ()=> console.log(`API WORKING ON PORT ${port}`));

app.get('/', (request, response)=> response.send("API ROUTE 1"));