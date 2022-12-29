const express = require("express")
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+ "/index.html");
})

app.post("/", function(req, res){
  
   var numb1 = Number(req.body.n1) ;
   var numb2 = Number(req.body.n2) ;
   var result1 = numb1 + numb2;
   console.log(req.body)

   res.send("The sum is equal to "+result1);

})

app.listen(3000, function(){
    console.log("The server has started at port "+ 3000)
})
