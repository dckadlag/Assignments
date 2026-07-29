//Dta types in java divided in to two different types
//1. Primitive data types:=> (imutable data types) (original value want change if we are going to perfor oper)
//2. Non primitive data types (mutable data types) (original value will change if we are going to perfor oper)

//Imutable:
/*let a=10;
a+10;
console.log(a);

//mutable
let empData={
    "name" : "Dhananjay",
    "id" :153
}
empData.age= 36;
console.log(empData);
*/
//****************Primitive Data types******************
//1. Number: => the data can store number with or without decimals
// number should be stored any quotations
let num1=12345;
let num2=10.15;
console.log(typeof num1);
console.log(typeof num2);

//string => the data type than can store text , char and words
// string should be stored in quatation (single quotes or double quotes or back ticks)
let firstName="Dhananjay";
let lastName="Kadlag";
let role = "'Senior' Executive QA";
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof role);

let empInfo =`emp first name is ${firstName}, emp last name is ${lastName}, emp role is ${role}`;
console.log(empInfo);  //to print dynamic value use backticks and ${} like wise

//3. Boolean => store the result of condition true or false
let  result=10>20;
console.log(typeof result);

//Undefined => represent varaible that has been decleared but not assign any value
let empId;
console.log(typeof empId);

//null:=> null represent varaible that has been decleared and assign a null value or empty value intentionally
let salary =1000;
salary =null;
console.log(salary);

// symbol:=>


//**************************Non Primitive Data types *****************************
//object:=>it represt a collection of key-value pairs store togather
/*let empName="Dhananjay";
let empId= 1234;
let visaStatus =true;
*/
let empData={
    "empName":"Dhananjay",
    "empId" :1234,
    "visaStatus" : true,
    "address":{
        "village": "jawale kadlag",
        "street" : "ganore road",
        "state": "Maharashtar"
    }
}
// accessing data from object
//1. Method 1: (Static Data)
console.log(empData.empName);
console.log(empData.address.village);

//2. Method 1: (dynamic Data)
console.log(empData["empName"]);
console.log(empData["address"]["village"]);

// Array:=> it is the data type that can store list of values.
let fruits = ["apple", "Bananana", "mango", "Grapes"];
let prices= [200,80,100,120];
let fruitsAndPrices = ["apple",200, "Bananana", 80, "mango", 100, "Grapes", 120];
//access the data from array 
console.log(fruits[0]);
console.log(prices[1]);
console.log(fruitsAndPrices[3]);

//Functions:=> function is the block of code that can be executed when it is called
//Steps to create the Function:
//1. Identified the duplicate code and seperate from the program
//2.seperate the duplicate code and add inside the curly braces/block
//3. Add a unique name to each and every block to call the function , along with function

function loginIntoApplication(browserName){
console.log(`launch the ${browserName} Browser`);
console.log("enter the url: https://www.icici.com/");
console.log("Enter the username as 'Dhananjay' and password as 'Mangal@123'");
console.log("click on the login button");
}

function logoutFromApplication() {
console.log("logout from the application");
console.log("close the brouser");
}

function getAccountBalance(){
console.log("navigate to the account balance page");
let accountBalance = 100000;//block scope varaibale
return accountBalance; // the value will assign to function name
}

//set:=> set is the datatype which represent collection of data types/ duplicate not allowed
let empIds = new Set();
empIds.add(1234);
empIds.add(123456);
empIds.add(1234);
empIds.add(3256);
empIds.add(12345678);
console.log(empIds)

//map:=> it represent collection of Key- value paire and key should be unique
let empDataa = new Map();
empDataa.set(1234, "Dhananjay");
empDataa.set(1234, "Dhanajay");
empDataa.set(123, "raghav");
console.log(empDataa);

//date:=>date represent date and time
let currentDate = new Date();
console.log(currentDate);
//get the current date
console.log(currentDate.getDate());
//current month
console.log(currentDate.getMonth());
//current year
console.log(currentDate.getFullYear());
//current hour
console.log(currentDate.getHours());
//current MInutes
console.log(currentDate.getMinutes());
//current seconds
console.log(currentDate.getSeconds());
//current milisecond
console.log(currentDate.getMilliseconds());

//current day
console.log(currentDate.getDay()+1);

let email = `dhananjaykadlag${currentDate.getTime()} @gmail.com`;
console.log(email);