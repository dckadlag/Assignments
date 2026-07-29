// How to store the data in JavaScript
//Declearation variable = data;

// In JavaScript, we can declear varaiable by using three different keywords.
//1. var (we should avoid in the current modern JavaScript program)
     // can be used to store data which is changing dynamically
//2. let (): can be used to store data which is changing dynamically 
//3. const: can be used to store constant data

//This varaiable decleration will differ mainly based on four important parameter
//1. Initialization
//2. Reassignment
//3. Re-declearation
//4. scope

//1. Initialization:=> adding the value at the time of declearation
var a; // no need to initialize any value
//let b; // no need to initialize any value
const c = 1234; // compulsory we need to initialize the value at the begining

//2. Reassignment:=> changing the original value
var a = 10; // we can reassign value
//let b = 20; // we can reassign value
// const c = 30; // we cant reassign value
console.log(a);
//console.log(b);

//3. Re-declearation:=> declearing same varaiable again to store different data
var a = "dhananjay"; // redecleartation is allowed
let b = "kadlag"; // redeclearation is not allowed
//const c= "abc"; // redeclearation is not allowed

console.log(a);
console.log(b);



//4. scope: => where can we access the data
//var=>  not block scoped
//let=>  block scoped
//const =>  blocked scope
// block meaning {}
{
    let x = 100;
    const y= 200;
    var z= 300;
    console.log(x);
    console.log(y);
    console.log(z);
}
