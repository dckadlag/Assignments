//If condition statement: always True or false
//Example 1: Verify is the person is eligible for voting or Not 
let age:number=18;
if (age>=18){
    console.log(`The person with age ${age} are eligible for voting`);
}
else {
    console.log(`The person with age ${age} are not eligible for voting`);
}

//Example 2: If Number is divisible by 2 then its Even otherwise ist Odd number
let num:number=10;
if(num%2==0){
    console.log(`The provided number ${num} are the Even number`);
}
else if (num%2!==0){
    console.log(`The provided number ${num} are the Odd number`);
}
else {
    console.log(`The provided value ${num} not the Even or Odd number`);
}

// Nested if else conditions examples
/*
Syntax:
if(condition 1){
statement 1}
else if(condition 2){
stetement 2}
else if(condition 3){
statement 3}
else {
    end condition}
*/
//Example: depending on Markes display appropriate grade

let marks:number=20;
if (marks>=90){
    console.log(`With marks ${marks} the obtained grade are A`)
}
else if(marks >=80){
    console.log(`The marks ${marks} obtained grade are B`);
}
else if (marks>=65){
    console.log(`The marks ${marks} obtained grade are C`);
}
else if (marks>=40){
    console.log(`The marks ${marks} obtained grade are only as Passed`)
}
else {
    console.log(`The marks ${marks} obtained grade are Failed`);
}

//switch case statement
/*
Syntax:
switch(expression)
{
case 1: statement
break;
case 2: statement
break;
case 3: statement
break;
default
break;
}
*/
//Example5: switch case statement example:
//Depending on the value of the day , Print the corresponding day of the week
let day:number=5;
switch(day)
{
    case 1: console.log(`The day is Monday`)
    break;
    case 2: console.log(`The day is Tuesday`)
    break;
    case 3: console.log(`The day is Wednesday`)
    break;
    case 4: console.log(`The day is Thursday`)
    break;
    case 5: console.log(`The day is Friday`)
    break;
    case 6: console.log(`The day is Saterday`)
    break;
    default : console.log(`The day is invalid`)
    break;
}