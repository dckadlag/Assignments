//Conditional statements: => The statement along with conditions
//statement: it is the line of code 
// (condition){
// statement
// }

//There are two different types of conditional statement available.
//1. if else conditional statement:=> when we dont know the result of the condition before itself
//2. switch case conditional statement=> when we know the result and we want to choose one options frm all available

//1-1: nested if else conditional statement
//if (condtion 1){
//code to be executed if condition 1 is true
//}else {
    //}
//} else if (condition 2){
//code to be executed if condition 2 is true
//}else if(condition 3){
//code to be executed if condition 3 is true
//}else {
    //defalut code to be executed if all conditions are false 
    //}

    //Example of if-else conditional statement
    let percentage:number=35;
    if(percentage>=90){
        console.log("Grade A");
    }else if (percentage>=80){
        console.log("Grade B");
    }else if (percentage >=70){
        console.log("Grade C");
    }else {
        console.log("Grade D");
    }

// Example of nested if -else coditional statement

if (percentage>=96){
    console.log("Grade A");
    if (percentage>=95){
        console.log("Hey dhananjay, you will get gold medal");
    }else if (percentage>=90){
        console.log("Hey dhananjay , you will get silver medal");
    }else {
        console.log("Hey dhananjay, you will get bronze model");
    }
}else if (percentage>=80){
    console.log("Grade B")
}else if (percentage>=70){
    console.log("Grade C")
}else {
    console.log("Grade D")
}

//Example of switch-case conditional statement
let env: string = "uat";
switch(env){
    case"dev":
    console.log("launch the application with dev.amezon.com");
    break; //break keyword is used to exit from the switch-case blocked when the case is matched
    case "qa":
    console.log("launch the application with qa.amezon.com");
    break;
    case "prod":
    console.log("launch the application with prod.amezon.com");
    break;
    default:
    console.log("please provide the correct environment");
}