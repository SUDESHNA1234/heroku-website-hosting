const express=require ('express');
require("./db/conn");

const User=require("./models/usermsg");
const Donate=require("./models/userdonate");

const app= express();
const port=process.env.PORT || 3000;
const path=require("path");
const hbs =require("hbs");
const { registerPartials } = require('hbs');
// setting the path
const staticPath= path.join(__dirname, "../public");
const templatePath= path.join(__dirname, "../templates/views");
const partialPath= path.join(__dirname, "../templates/parcials");

//app.use('/css',express.static(path.join(__dirname,"../node_modules")))
//app.use(express.static(staticpath));

app.use(express.urlencoded({extended:false}))
app.use(express.static(staticPath))
app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialPath);

app.get("/",(req,res)=>{
    res.render("indexx");
});
app.get("/contact",(req,res)=>{
    res.render("contact");
});
app.post("/contact",async(req,res)=>{
    try {
       // res.send(req.body);
       const userdata=new User(req.body);
       await userdata.save();
       res.status(201).render("indexx");
    } catch (error) {
        res.status(500).send(error);
    }
})
app.post("/volunteer",async(req,res)=>{
    try {
       // res.send(req.body);
       const donatedata=new Donation(req.body);
       await donatedata.save();
       res.status(201).render("indexx");
    } catch (error) {
        res.status(500).send(error);
    }
})
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/service",(req,res)=>{
    res.render("service");
});
app.get("/donate",(req,res)=>{
    res.render("donate");
});
app.get("/volunteer",(req,res)=>{
    res.render("volunteer");
});

//routing
//app.get(path,callback)
app.get("/",(req,res)=>{
    res.send("Hi this is Sudeshna");
});
 
//server create
app.listen(port ,()=>{
    console.log(`Server is running at port no ${port}`);
});