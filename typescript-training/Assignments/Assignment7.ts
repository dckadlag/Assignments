//Assognment 07: 
let java:string="Java programming if fun and challenging";

//1. Count the total words
let wordCount=java.split(" ");
console.log("Total words:", wordCount.length);
//2. Print words in reverse order 
console.log("Reverse order:", wordCount.reverse().join(" "));

//3. First char of each words uppercase
let result=java
.split(" ")
.map(wordCount=>wordCount.charAt(0).toUpperCase()+wordCount.slice)
console.log("Upper case sentenance:", result);


