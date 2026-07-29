//Debugging: debugging is the process of identifing and fixing the error within the program

console.log("Execute line 1");
console.log("Execute line 2");
console.log("execute line 3");
sumOfNumbers(5,10);
console.log("Execute line 4");
console.log("Execute line 5");
console.log("execute line 6");


//Debugging the program step-by-step
//1. open the program in the browser and open the developer toolbar(F12)
// Add the break points : before the line where you want to manually execute the program
//2. Run the program in debug mode

// 1 st option for debugging: 
// Continue (F5):=> Continue the auto execution till next breakpoint
// 2 st option for debugging: 
// Stop (Shift+F5):=> Stop the execution completely/ or terminate
// 3 st option for debugging: 
// restart (ctr + Shift + F5):=>Restart the pgm execution once again from begening
// 4 th: 
// Step Over (F10): Execute the current line and move to next line
// 5 th: 
// Step Into (F11): go inside the function and check internal code
// 6 th: 
// Step Out (shift+F11): comeout of the function and move to next line














//logic to calculte the numbers
function sumOfNumbers(a,b)
{
    c=a+b
    console.log(c);
}