//Strings:=> it is the collection of characters
let firstName: string="Dhananjay";
let lastName: string="Kadlag";
let role: string="`senior` SDET";
console.log(firstName);
console.log(lastName);
console.log(role);

let empInfo =`emp first name is ${firstName}, emp last name is ${lastName} and emp role is ${role}`;
console.log(empInfo);

//1. Storing string inside the varaiable
console.log("1. Storing string inside the varaiable");
let originalString:string=" username : Admin | password: admin123" ;
console.log(originalString);

//2. Method to calculate the total no pof charachers available inside the string
console.log("2. Method to calculate the total no pof charachers available inside the string");
console.log(`Total no of characters inside the string are ${originalString.length}`);

//3. Method to get a specific characters by using an index
console.log("3. Method to get a specific characters by using an index");
let charAtIndex5:string=originalString.charAt(5);
console.log(`Characters at Index 5 is ${charAtIndex5}`);

//4. Reverse the original string
console.log("4. Reverse the original string");
let reverseString: string="";
for (let i:number=originalString.length-1;i>= 0;i--){
    reverseString = reverseString+originalString.charAt(i);
}
console.log(reverseString);

//5. Method to Remove unwanted spaces from string 
console.log("5. Method to Remove unwanted spaces from string");
let trimedString:string=originalString.trim();
console.log(`string after eliminating unwanted spaces: ${trimedString}`);

//5. Method to eliminate all the spaces from string
console.log("5. Method to eliminate all the spaces from string");
console.log(`Original String: '${originalString}'`);
console.log(`string after removing spaces: '${originalString.replace(/ /g, "")}'`);

//6. Method to eliminate all the alphabets from the string
console.log("6. Method to eliminate all the alphabets from the string");
console.log(`Original String: '${originalString}'`);
console.log(`string after removing alphabets: '${originalString.replace(/[a-zA-Z]/g, "")}'`);

//7. Method to eliminate all the numbers from the string
console.log("7. Method to eliminate all the numbers from the string");
console.log(`Original String: '${originalString}'`);
console.log(`string after removing numbers: '${originalString.replace(/[0-9]/g, "")}'`);

//8. Method to remove the special characters from the string
console.log("8. Method to remove the special characters from the string");
console.log(`Original String: '${originalString}'`);
console.log(`string after removing special char from string: '${originalString.replace(/[^0-9a-zA-Z]/g, "")}'`);

//9. Method to convert all char of string in to upper case
console.log("9. Method to convert all char of string in to upper case");
console.log(`Original String: '${originalString}'`);
console.log(`string after convert all char of string in to upper case: '${originalString.toUpperCase()}'`);

//10. Method to convert all char of string in to lower case
console.log("10. Method to convert all char of string in to lower case");
console.log(`Original String: '${originalString}'`);
console.log(`string after convert all char of string in to lower case: '${originalString.toLowerCase()}'`);

//11. Method to extract part of the string
console.log("11. Method to extract part of the string");
console.log(`Original String: '${originalString}'`);
console.log(`Extracted part (index 10 to 20): '${originalString.substring(10,20)}'`);
console.log(`Username: '${originalString.substring(10,20)}'`);
console.log(`password: '${originalString.substring(35,39)}'`);

//12. Method to split the string
console.log("12. Method to split the string");
let splitString: string[]=originalString.split(" ")
console.log(`Original String: '${originalString}'`);
console.log(`Split String: '${splitString}'`);
console.log(`Username: ${splitString[3]}, Password: ${splitString[7]}`)

//13. Method to compare  two different string values
console.log("13. Method to compare  two different string values");
//==: Loose equality operator=> compare only value of string 
//=== strict equality=>compare both value and type of string
let string1:string="10"
let string2: string|number=10;

// console.log(`loose Equality (==): ${string1==string2}`);
// console.log(`loose Equality (===): ${string1===string2}`);

//includes()=> It will check whether the string contains a special char or not 
//startSwitch()=> It will check whether the string start with a specific substring or not
//endswith()=> it will check whether the string end with a specifics substring or not

console.log(`Check Dhananjay kadlag contains 'jay':${"Dhananjay kadlag".includes("jay")}`);
console.log(`Check Dhananjay kadlag starts with 'Dhananjay':${"Dhananjay kadlag".startsWith("Dhananjay")}`);
console.log(`Check Dhananjay kadlag ends with 'kadlag':${"Dhananjay kadlag".endsWith("kadlag")}`);

//14. Method to convert string to another data type and vice versa
console.log("14. Method to convert string to another data type and vice versa");
let stdcode:number=2425;
let phone:number=2442566;
let std:string=String(stdcode)
console.log(std+phone);

let balance:string="Account balance : 19999.99";
balance = balance.replace(/[^0-9.]/g, "");
console.log(balance);
    let bal:number=parseFloat(balance)
console.log(bal>=10000);




