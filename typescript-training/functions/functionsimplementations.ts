//function:=>  Block of code or collection of statements written together to complete specific task
//there are multiple ways we can implement the functions in Typescript

// 1: Functions without parameters and without return type
//the function is created without any parameter and also it is not going to give us any output values
function login(): void {
    console.log("launch the chrome browser");
    console.log("Enter the url: www.amazon.com");
    console.log("Enter username as Dhananjay and password as Mangal@123");

}
// calling the function
login();

//2. Function with parameter and without return parameter
// The function is created with some input parameter as there is change in data but it is not going to return any value
function loginWith(username:string, password:string): void {
    console.log("launch the chrome browser");
    console.log("Enter the url: www.amazon.com");
    console.log(`Enter username as ${username} and password as ${password}`);
}
//calling function
loginWith("Dhananjay", "Mangal@123");

//3. function with parameter with return type
// the function is created with input parameter and it is return some output value at the end of execution
function getAccountBalance(username:string, password:string):number{
    console.log("launch the chrome browser");
    console.log("Enter the url: www.icici.com");
console.log(`Enter username as ${username} and password as ${password}`);
  console.log("click on account section");
  const accountBanalce:number=10000;
  return accountBanalce;
}
//calling function
console.log(getAccountBalance("Dhananjay","Mangal@123"));

//4. Function without parameters and with return type
//The function is created without any input parameter, but it is going to return some output value
function getCurrentYear():number{
let date=new Date();
return date.getFullYear();

}
//calling function'
console.log(getCurrentYear());

//5. Function with optional parameter
//function is created with few parameter but it is not mandatory to enter all the parameret while calling fun
function printEmployeeDetails(empId:number, empName:string, empSalary?:number):void{//? refer optional parameter
    console.log("Employee Name is "+empName);
    console.log("Employee Id is "+ empId);
    if (empSalary){

    }
    console.log("Employee salaray is "+empSalary)

}
//calling function
printEmployeeDetails(1234, "Dhananjay", 20000)


//6. function with default parameter
// by default we are going to provide the value


function employeeInformation(empId:number, empName:string, visaStatus:boolean=false):void{//? refer optional parameter
    console.log("Employee Name is "+empName);
    console.log("Employee Id is "+ empId);
    console.log("Employee visa status is " +empId)
    console.log("Employee visa status is " +visaStatus)
}
//calling function
employeeInformation(1234, "Dhananjay");

//7. Function with Restparameter
//function with multiple parameter like array
function sumOfNumbers(...numbers:number[]){
    let sum:number=0;
    for (let num of numbers){
        sum+=num;
    }
    return sum;
}
console.log(sumOfNumbers(1,2,3,4,1,55));
