var express = require('express');
var app = express();



var complexEmp ={
    "empData":[
        {
            "empId":100001,
            "empName":"Aayush Khangar",
            "empSalary":20000,
            "currency":"INR"
        },
        {
            "empId":100002,
            "empName":"Vinayak",
            "empSalary":21000,
            "currency":"INR"
        },
        {
            "empId":100003,
            "empName":"Harshal",
            "empSalary":22000,
            "currency":"INR"
        }
    ],
    "empCities":[
        {
            "cityName":"Nagpur",
            "StateName":"Maharashtra"
        },
        {
            "cityName":"Mumbai",
            "StateName":"Maharashtra"
        },
        {
            "cityName":"Bhandara",
            "StateName":"Maharashtra"
        }
    ],
    "empGender":{
        "Male":"M",
        "Female":"F",
        "Other":"O"
    }
};


app.listen(1001);

app.get("/",(req,res) =>{
    res.send("Aayush Khangar is now finally running our first microservice using nodemon")
});

app.get("/employee",(req,res) =>{
    res.json(complexEmp);
});

console.log("Your microservice is running @ http://localhost:1001");
//Issues related to nodemon are reolved using below video
//Set-ExecutionPolicy Unrestricted
//https://www.youtube.com/watch?v=hQm9jveLUK8