console.log("Hello world");



var x = 1000;
console.log(x);
console.log("Value of x is " + x);
var y = typeof(x);
console.log("type of x is " +y);
console.log(typeof(y));

var z = "1000";
console.log("type of z is " +typeof(z));
console.log("type of z after parseint is " +typeof(parseInt(z)));

var a = true;
console.log("type of a is " +typeof(a));


// Arrays
var aBikes = ["Avenger","Pulsar","Splendor"];
console.log(aBikes);
console.log("type of aBikes is " +typeof(aBikes));
console.log("The First bike is " + aBikes[0]);
console.log("The Last bike is " + aBikes[aBikes.length - 1]);
aBikes.push("Centuro");
console.log(aBikes);
aBikes.splice(2,0,"FZ");
console.log("Array after inserting in index 2 - " + aBikes);
aBikes.splice(2,1,"R15");
console.log("Array after replacing in index 2 - " + aBikes);

for (let i = 0; i < aBikes.length; i++) {
    const element = aBikes[i];
    console.log("At position "+i+" is "+element);
}



