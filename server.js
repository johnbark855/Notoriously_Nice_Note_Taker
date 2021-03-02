//dependencies
const bodyParser = require ('body-parser');
const express = require('express');
const fs = require ('fs')
const path = require ('path');
const db = require ('./db/db.json')

var app = express();

const PORT = process.env.PORT || 3002;
 
app.use(express.urlencoded({ extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "Public")));

require ('./Routes/apiRoutes')(app);
require ('./Routes/htmlRoutes')(app);
//listen to port
app.listen(PORT, function() {
    console.log('App is listening to PORT' + PORT);
});