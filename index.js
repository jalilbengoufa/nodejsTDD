const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;


const mysql = require('mysql');

// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});
 
// connect to database
mc.connect();
if (!module.parent) {
    app.listen(port);
 }
console.log('API server started on: ' + port);

app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));

var routes = require('./routes/StudentRoutes'); 
routes(app); 

module.exports = app;