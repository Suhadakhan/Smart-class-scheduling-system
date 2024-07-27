const express = require('express')
const session = require('express-session')
const path = require('path');
const app = express()
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })   
var mysql = require('mysql');

app.use(session({secret:"hh"}));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "KU$H@LJ@V@ismylove192.168.0.112",
  database:"Project"  
});
 

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, 'signup.html'))    
})

app.post('/signup_pro',urlencodedParser ,function(req,res){
  reqEno
})

app.listen(9000)
