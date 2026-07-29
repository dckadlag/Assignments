//variables are devided in to different categories

//1.  local varaibales:=> variables decleared inside the block {}
//2. global varaibales:=> variable decleared outside the block 

let empName = "Dhananjay" // can be access throughout the file

{
   let empAge = 36; //local varaible can be access within the block only
   //console.log(empName);
   console.log(empAge);
}

console.log(empName);
//console.log(empAge);