//ASynchronous Behavior

// y = () => {
//     console.log("Before calling Timeout");
//     setTimeout(() => {
//         console.log("Inside Time out");
//     }, 5000);
//     console.log("After calling Timeout");
// }
// y();
// console.log("After calling Function");

// Synchronous Behavior with Promise
// const timerFunction = ms => new Promise(resolve => setTimeout(resolve, ms));

// const callMyFunction = () =>{
//     return timerFunction (5000).then(()=>{
//         console.log("Wait Function");
//     });
// }


// const myFunction = async () => {
//     console.log("Before calling Timeout");
//     await callMyFunction();
//     console.log("After calling Timeout");
// }
// myFunction();
// console.log("After calling Function");


// Synchronous Behavior with Util


