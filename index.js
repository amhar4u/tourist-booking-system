const express = require('express');
const cors = require('cors');

const App = express();

App.use(express.json());
App.use(cors());
App.use('/', require('./routes/routes'));

App.listen(8080, ()=>{
    console.log("Server Started on http://localhost:8080");
});