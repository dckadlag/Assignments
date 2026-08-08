//Jumping statements:=>Used to terminate the execution
//Mian jumping statements in Typescript are
//1. break=> Terminate the current loop or switch statement
//2. continue=> skip the current iteration of the loop and moves to the next iteration 
//3. return=> Exist from the current function optionally return a value
for(let i:number=1;i<=10;i++){
    if(i==5){
        break; // will break entire loop.
    }
    console.log(i);
}
//continue=>
for(let i:number=1;i<=10;i++){
    if(i==5){
        continue; // continue statement will skip current iteration only.
    }
    console.log(i);
}

//return=> it is used in Function
