const bodyParser = require ('body-parser');
const express = require('express');
const fs = require ('fs')
const path = require ('path');
const db = require ('./db/db.json')

var app = express();

const PORT = process.env.PORT || 3001;
 
app.use(express.urlencoded({ extended:true}));
app.use(express.json());
app.use('/assets',express.static('./assets'));

require ('./Routes/apiRoutes')(app);
require ('/Routes/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log('App is listening to PORT' + PORT);
});
