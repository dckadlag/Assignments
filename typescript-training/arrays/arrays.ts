//Arrays: array is the data type that can store  a list of values
// let numbers: number[]=[1,2,3,4,5];
// let fruits: string[]= ["Apple", "Banana", "Orange"];


//1. storing the values within the arrays
const fruitss:string[] = ["Apple", "Bananan", " Mango", "Orange"];
const prices:number[] = [10,20,30,40];
const fruitssAndPrices: (string |number)[]=["Apple", 10, "Banana", 20, "Mango", 30, "Orange", 40];

// 2. accessing values from the arrays
console.log("2. accessing values from the arrays");
console.log(fruitss[0]);// apple
console.log(prices[1]);// apple
console.log(fruitss[1]);// Bananana
console.log(prices[2]);//Mango
console.log(fruitss[3]);//Orange
console.log(prices[3]);//
console.log(fruitssAndPrices.length);// 8 length of arrays=> max index can be access is 7


//3. Adding additional values to the existing arrays at the end

 console.log("3. Adding additional values to the existing arrays at the end");
 fruitss.push("Grapes");
 prices.push(100);
 console.log(fruitss);
 console.log(prices);

 //4. Delete the last values from an existing arrays
 console.log("4. Delete the last values from an existing arrays");
 fruitss.pop();
 prices.pop();
 console.log(fruitss);
 console.log(prices);

 //5. Adding additional values to the existing arrays at the begining
 console.log("5. Adding additional values to the existing arrays at the begining");
 fruitss.unshift();
 prices.unshift();
 console.log(fruitss);
 console.log(prices);
 
 //6. Delete the first values from existing arrays 
 console.log("6. Delete the first values from existing arrays");
 fruitss.shift();
 prices.shift();
 console.log(fruitss);
 console.log(prices);

 //7. Add and delete values inside the array at specific index
 console.log("7. Add and delete values inside the array at specific index");
 //array.splice(index, num of element to be deleted, values to be added);
 fruitss.splice(1,2, "Graps", "papaya");
 //fruitss.splice(1,0, "Graps", "papaya");
 console.log(fruitss)

 //8. Create a new array by extracting part of the values from the existing array
 console.log("8. Create a new array by extracting part of the values from the existing array");
 //array.slice(starting index, end-index+1);
 let freshFruits : string[]=fruitss.slice(2,4);
 console.log(freshFruits);

 //9. Create new array by merging multiple existing array.
 console.log("9. Create new array by merging multiple existing array");
let veggies:string[]=["potato", "Tomato", "chillis"];

let fruitsAndVegies:string[]=fruitss.concat(veggies);
console.log(fruitsAndVegies);

//10. Find the index of a specific values withing the array
console.log("10. Find the index of a specific values withing the array");
console.log(fruitss.indexOf("Banana"));
console.log(fruitss.indexOf("dragonfruits")); // -1 not found

//11. Iterate all the values from the array
console.log("11. Iterate all the values from the array");
for(let fruit of fruitss ){
    console.log(fruit);

}
//12. Reverse the values within the array
console.log("12. Reverse the values within the array");
fruitss.reverse();
console.log(fruitss);

//13. sort the values within the array
console.log("13. sort the values within the array");
fruitss.sort();
console.log(fruitss);
prices.sort((a,b)=>b-a);
console.log(prices);
fruitsAndVegies.reverse();
console.log(fruitss);


