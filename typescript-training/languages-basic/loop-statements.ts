//loopes in type scripts : callied as jumping statements
//loop statement: is a set of condition that we are going to add along with the statement to execute the same code multiples time
// execute the code again and again
//Example: without loop statement
let name:string="Dhananjay";
//before loop
/*console.log(name);
console.log(name);
console.log(name);
console.log(name);
*/
//loop statements are divided in to 2 diff types
//1. For loop:=> when we know total no of iteration
//2. while loop:=> when we dont know total no of iteration

// for loop:
//syntax: for(condition to start, condition to end, interval){
                     //statement to execute
                     //}
//Print name Dhananjay for 10 times
for(let i:number=1;i<=10;i++){
    console.log(name);
}

//2. while loop
//syntax: while(condition to start){
         // statement
        //}
let j:number=1;
while(j>0){
    //condition to break the loop
    if(j>10){
        break;
    }
    console.log("Refersh the page")
    j++;
}

// special cases in the loop statement
//1. for of loop: use to iterate over the values of an array or existig list
//2. for in loop
//3. do while loop

//Array
let fruits:string[]=["Apple", "Banana", "Mango", "Grapes"];
//print each fruits name from the array by using a normal for loop
for(let i:number=0;i<=3;i++){
    console.log(fruits[i]);
}

//1. for of loop:=> iterate over each and every value of given list
//syntax: 
//for(let value:datatype of list){
// console.log(value)
//}
for(let fruit of fruits){
console.log(fruit);
}
//2. for in loop:=> iterate over each and every property of an object
//syntax:
//for(let key in object){
//condition to execute
//}
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
for (let key in empData.address){
    console.log(key);
}

//do while loop=>execute the statement at least once and then check for condition 
//syntax=>
//do{
//statement to execute
//}while(condition to check)
 let x:number=0;
// while(x>0){
//     console.log("referesh the page");
//     x++;
// }

do{
    console.log("referesh the page");
    x++;
  }  while(x>0);

