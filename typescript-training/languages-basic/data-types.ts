//Typescripts:=> it is the superset of java script: 
// Syntex to store the data:
// declearation varaiable: data type=data:
//in Typescript Two diff data type is there'

//****************Primitive Data types******************
//1. Number: => the data can store number with or without decimals
// number should be stored any quotations
let num1: number=12345;
let num2: number=10.15;
console.log(typeof num1);
console.log(typeof num2);
// num1="Dhananjay";
// console.log(num1);

//string => the data type than can store text , char and words
// string should be stored in quatation (single quotes or double quotes or back ticks)
let firstName: string="Dhananjay";
let lastName: string="Kadlag";
let role: string= "'Senior' Executive QA";
console.log(firstName);
console.log(lastName);
console.log( role);

let empInfo =`emp first name is ${firstName}, emp last name is ${lastName}, emp role is ${role}`;
console.log(empInfo);  //to print dynamic value use backticks and ${} like wise

//3. Boolean => store the result of condition true or false
let  result:boolean=10>20;
console.log(result);

//Undefined => represent varaible that has been decleared but not assign any value
let empId:undefined;
console.log(typeof empId);

//null:=> null represent varaible that has been decleared and assign a null value or empty value intentionally
let salary:null=null;
salary =null;
console.log(salary);

//union:=>union represent more than one data type within varaiables/combination of multiple data types
let empAdress:string | number="Sangamner";
console.log(empAdress);

empAdress=500001; 
console.log(empAdress);

//any:=>it represents any data types is allowed in varaible(whenever we use any type safety removed)
let data : any="dhananjay";
console.log(data);
data=1234;
console.log(data);
data=true
console.log(data);

//**************************Non Primitive Data types *****************************
//object:=>it represt a collection of key-value pairs store togather
interface empInfo {
      "empName":string,
    "empId" :number,
    "visaStatus" : boolean,
    "address":{
        "village": string,
        "street" : string,
        "state": string
}
}
let empData:empInfo ={
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

//Array: Represent list of values
// Array:=> it is the data type that can store list of values.
let fruits : string[]= ["apple", "Bananana", "mango", "Grapes"];
let prices:number[]= [200,80,100,120];
let fruitsAndPrices: (number | string)[]= ["apple",200, "Bananana", 80, "mango", 100, "Grapes", 120];
//access the data from array 
console.log(fruits[0]);
console.log(prices[1]);
console.log(fruitsAndPrices[3]);

//Tuples"=>is an order array in type script
//problem statement: store emp name emp id, visa status within the array
//array
let empDetailss:(string|number|boolean)[]=[1234, "Dhananjay", true];

//Tuples
let empDetails:[string, number, boolean]=["Dhananjay", 1234, true];


//Functions:=> function is the block of code that can be executed when it is called

//Steps to create the Function:
//1. Identified the duplicate code and seperate from the program
//2.seperate the duplicate code and add inside the curly braces/block
//3. Add a unique name to each and every block to call the function , along with function

function loginIntoApplication(browserName: string, url: string): void{
console.log(`launch the ${browserName} Browser`);
console.log("enter the url: ${url}");
console.log("Enter the username as 'Dhananjay' and password as 'Mangal@123'");
console.log("click on the login button");
}

function logoutFromApplication(): void {
console.log("logout from the application");
console.log("close the brouser");
}

function getAccountBalance():number{
console.log("navigate to the account balance page");
let accountBalance = 100000;//block scope varaibale
return accountBalance; // the value will assign to function name
}
function fail():never{
throw new Error("this function will never return any value");
}

//set:=> set is the datatype which represent collection of data types/ duplicate not allowed
let empIds: Set<number>= new Set();
empIds.add(1234);
empIds.add(123456);
empIds.add(1234);
empIds.add(3256);
empIds.add(12345678);
console.log(empIds)

//map:=> it represent collection of Key- value paire and key should be unique
let empDataa: Map<number,string> = new Map();
empDataa.set(1234, "Dhananjay");
empDataa.set(1234, "Dhanajay");
empDataa.set(123, "raghav");
console.log(empDataa);