const bodyParser = require ('body-parser');
const express = require('express');
const fs = require ('fs')
const path = require ('path');
const db = require ('./db/db.json')

var app = express();

const PORT = process.env.PORT || 8080;
 
app.use(express.urlencoded({ extended:true}));
app.use(express.json());
app.use('/assets',express.static('./assets'));

require ('./routes/apiRoutes')(app);
require ('/routes/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log('App is listening to PORT' + PORT);
});