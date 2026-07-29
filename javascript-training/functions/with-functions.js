//Test case 1: verify the home page
console.log("*************************TEST CASE 1: VERIFY THE HOME PAGE***************");

loginIntoApplication("chrome");

console.log("verify the home page is displayed or not");
console.log("logout from the application");
logoutFromApplication();

//Test case 2: verify the account balance
console.log("*************************TEST CASE 2: VERIFY THE ACCOUNT BALANCE***************");

loginIntoApplication("firefox");

console.log("verified the home page displayed");
// console.log("navigate to the account balance page");
// let accountBalance = 100000;
console.log("verify the account balance is displayed as " + getAccountBalance());

logoutFromApplication();


//Test case 3: verify the account statement
console.log("*************************TEST CASE 2: VERIFY THE ACCOUNT statement***************");

loginIntoApplication("edge");

console.log("verified the home page displayed");
console.log("navigate to the account statement page");
console.log("verify the account statement is displayed with following details");

logoutFromApplication()

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