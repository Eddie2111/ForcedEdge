// hello world //
const express = require ("express");
const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json())

// set the view engine to ejs

// use res.render to load up an ejs view file
app.set('view engine', 'ejs');

app.get("/",(req,res)=>{
  res.render("pages/index");
});

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
app.get("/about-us",(req,res)=>{
  res.render("pages/aboutus");
});

app.get("/event",(req,res)=>{
  res.render("pages/event");
});


app.listen(3000,()=>{
  console.log("app started on 3000");
});
