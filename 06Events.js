var events = require("events");
var x = new events.EventEmitter();

x.on('speak',() =>{
    console.log("Its Node JS");
});

x.on('Run',() =>{
    console.log("Node JS is running");
});

x.emit('speak');
x.emit('Run');

var utils = require('util');

var Person = function(name){
    this.name = name ;
};

utils.inherits(Person,events.EventEmitter);
var Aayush = new Person("Aayush");
var Khangar = new Person("Khangar");
var Datta = new Person("Datta");

var People = [Aayush,Khangar,Datta];
People.forEach(element => {
    element.on('talk',(msg)=>{
        console.log(element.name + " says " + msg);
    });
    element.on('salary',(msg)=>{
        console.log(element.name + " salary " + msg);
    });
});

Aayush.emit('talk','Is Name');
Khangar.emit('talk','Is SurName');
Datta.emit('talk','Is MiddleName');
Aayush.emit('salary','25000');
