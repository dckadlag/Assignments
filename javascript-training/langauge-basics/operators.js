//operator are nothing but set of special characters used in java script to perform different type of operation
// operators in java script are classified in 5 different types
//1. Arithmatic operators
//2. Assignment operator
//3. comparision operator
//4. logical operator
//5. Ternary operator

//1. Arithmatic operators:=> special character used to perform mathimatical operation
// + going to use for addition
// - substraction
// * multiplication (astrict)
// / division
// % modulus (reminder)
// ++ increment (increese previous value by 1)
// -- decrement (decrease previous value by 1)

let a = 10;
let b= 20;

//a++ => post increment (post execution of current line, increase value by 1)
//b-- => post decrement (post execution of current line, decrease the value by 1)

console.log(a++);
console.log(a);
console.log(b--);
console.log(b);


let c = 100;   
let d = 200;

//++c => pre increment => increase the value first by 1, then execute the line
//--d => pre decrement => decrease value first by 1 , then execute the line
console.log(++c);
console.log(--c);

//2. Assignment operator => the operator or special characters used to assign value to a varaible
// (=, += ,-=, *=, /= , %=)

let i = 10;
console.log("initial value of i is " +i);

i += 100; // i = i + 100: => 10+100=110
console.log("after using  += value of i is " +i);

i-=5;   // i = i - 5: 110-5: =105
console.log("after using  -= value of i is " +i);

i*=10; //105*10= 1050
console.log("after using  *= value of i is " +i);

i/=20; //i= i/20 := 1050/20 ;=
console.log("after using  /= value of i is " +i);

//3. comparision operator => special characters used to compare two different values
// ==, ===, >, <, >=, <=, !=, !==

//== represt loose equality : means compare only data 
// === represent strict equality, strict equality meaning compare data along with data type

let x = 10; // storing as numbers
let y = 10; // storing as numbers
let z = "10"; //storing as text

console.log(x == y); // true
console.log(x == z);// true: because it is comapring only data

console.log(x === y); //true
console.log(x === z); // false : because it is comparing data along with its data type

// 4. Logical operator:=> special characters used to build logic by combining multiple condition together
// 1. && (and) => All condition must be true
// 2. || (or)  => Anyone condition should be true
// 3. ! (not)  =>opposite result

let p = 10;
let q = 20;
let r = 30; 
console.log(p<q && q>r); //true && false =false
console.log(p<q || q>r); //true or false =true
console.log(!p<q && q>r); //not (true or false)= not(true) =false

//5. Ternary operator: => special char used to write a condition in a single line or shortland of an if else condition statement
// Syntax:=> varaibale decleartion variable = result
//let result = (condition) ? value if true : value if false;

let age = 18;
let result = (age>=18)? "eligible to vote" : "not eligible to vote";
console.log(result);
