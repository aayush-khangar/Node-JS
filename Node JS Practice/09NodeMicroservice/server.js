var express = require('express');
var app = express();



this.Emp = [{
	"empId": "100001",
	"empName": "Aayush Khangar",
	"empSalary": 20000,
	"currency": "INR"
}, {
	"empId": "100002",
	"empName": "Vinayak",
	"empSalary": 21000,
	"currency": "INR"
}, {
	"empId": "100003",
	"empName": "Harshal",
	"empSalary": 22000,
	"currency": "INR"
}];


app.listen(1001);

app.use(express.json());
//Middleware to serve static file content of webapp folder
app.use("/", express.static("webapp/"));

app.get("/",(req,res) =>{
    res.send("Aayush Khangar is now finally running our first microservice using nodemon")
});

app.get("/employee",(req,res) =>{
    res.json(this.Emp);
});

app.get("/index.html",(req,res) =>{
    res.sendFile(__dirname + '/webapp/index.html');
});

app.get("/employee/:empName",(req,res) =>{

    var foundEmp = this.Emp.find(function(element){
        return element.empName === req.params.empName;
    });
    typeof(foundEmp) !== undefined ? res.send(foundEmp):res.send({
        "message" : "Employee not found"
    });



})

console.log("Your microservice is running @ http://localhost:1001");

//Issues related to nodemon are reolved using below video
//Set-ExecutionPolicy Unrestricted
//https://www.youtube.com/watch?v=hQm9jveLUK8