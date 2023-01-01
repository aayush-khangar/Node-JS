this.tax = 18;
var x = function(a,b) 
{
    return a + b + this.tax;
}

console.log(x(10,20));

//Arrow function

y = (a,b) => {
    return a + b + this.tax;    
}
console.log(y(10,20));
