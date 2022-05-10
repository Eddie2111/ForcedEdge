const express = require ("express");
const mysql = require('mysql');
const routes = require("./routes");
const indexform1 = require("./controller/indexForm1");
const test = require("./controller/test");
var Mongo = require('mongodb').MongoClient;
const session = require('express-session');
const multer  = require('multer')
const sqlconnection = require("./model/sqlconnection");
const bcrypt = require('bcrypt');
var cookieParser = require('cookie-parser');
// set up calls
const upload = multer({ dest: 'uploads/' })
const app = express();
// set up calls

// Environment setup
app.use(express.urlencoded({extended: true}));
app.use(express.json());
sqlconnection.connect();
// Environment setup


// set the view engine to ejs
app.set('view engine', 'ejs');


//sessioning
const myPlaintextPassword = 's0/\/\P4$$w0rD';     
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(myPlaintextPassword, salt);
app.use(cookieParser());
app.use(session({
    secret: hash,
    saveUninitialized: false,
    resave: false,
    maxAge: 3600
  }))


 // routes
 // session test 
app.get("/test", (req, res) => {
    res.send( {
        title: "Test",
        message: "This is a test page",
        session: req.session
    });
});


 // session test

 // home page
app.get("/",(req,res)=>{
  if (!req.session.page_views) {
    req.session.page_view = 1;
  }
  else{
    req.session.page_view++;
  }
  res.render("pages/index");
  
});
app.post("/",(req,res)=>{
  const namef1      = req.body.namef1;
  const emailf1     = req.body.emailf1;
  const passwordf1  = req.body.passwordf1;
  const messagef1   = req.body.messagef1;
  if (namef1 && emailf1 && passwordf1 && messagef1){
    indexform1(namef1,emailf1,messagef1,passwordf1);
  }
  else{
    res.redirect("pages/index");
  }
  res.render ("pages/index");
  mysql.close();
});
//home page

app.get("/services",(req,res)=>{
  res.render("pages/services");
});

app.get("/wedding",(req,res)=>{
  res.render("pages/wedding");
});

app.get("/rental",(req,res)=>{
  res.render("pages/rental");
});

app.get("/submission",(req,res)=>{
  res.render("pages/submission");
});

app.get("/blog",(req,res)=>{
  res.render("pages/blog");
});

app.get("/career",(req,res)=>{
  res.render("pages/career");
});
app.post("/career",(req,res)=>{
  const data = req.body;
  //MongoClient()
    console.log(data);
    var MongoClient = Mongo.connect("mongodb://localhost:27017/event_career", function (err, db) {
      if(err) throw err;
      var dbo = db.db("event_career");
      dbo.collection("career").insertOne(data); 
        if (err) throw err;
        res.render("pages/career");
        console.log("1 document inserted");
      
   // Connect to the db
   });

    
});

app.get("/about-us",(req,res)=>{
  res.render("pages/aboutus");
});

app.get("/event",(req,res)=>{
  res.render("pages/event");
});

 // routes


const port = 4000;

app.listen(port,()=>{
  console.log("app started on "+port);
});
