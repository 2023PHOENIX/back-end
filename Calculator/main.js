

const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
    console.log(__dirname);
    // res.send("<h1>Hello world</h1>");
    
});


// install body-parser
app.post("/",function(req,res){
    let n1 = req.body.num1
    let n2 = req.body.num2;
    console.log(n1 + " " + n2);
    let newNum = Number(n1 + n2);

    res.send("calculated is  :" + newNum);

    console.log(req.body);
})
app.listen(3000,function(){
    console.log("server started on port 3000");
})




app.get("/bmi",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmi",function(req,res){
    // console.log(req.body);
    let Height = req.body.height;
    let weight = req.body.weight;
    let BMI = weight / (Height * Height);
    res.send    ("here is your calculated values : " + BMI);
})

