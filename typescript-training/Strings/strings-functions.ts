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