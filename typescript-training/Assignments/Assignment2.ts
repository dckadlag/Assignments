//create a common function and based on below details print whether user is eligible to get the loan or not
let customerName:string="John doe";
let creditScore:number=720;
let income:number=55000.0;
let isEmployed:boolean=true
let debtTolncomeRatio:number=35.0;
console.log(`customer name is ${customerName}`)

if (creditScore>=800){
    console.log("Loan status is Rejecetd");
}else if (creditScore>=700){
    console.log("loan status as Approved");

    if (income>=55000){
    console.log(`John doe income is ${income}`);

    } else if (income<=55000){
        console.log("income is less than as per criteria");
    }
    let employmentStatus: string = "Employed";
switch(employmentStatus){
    case"Employed":
    console.log("Employment status as Employed");
    if (debtTolncomeRatio <40){
        console.log(`loan status Approved as debt income ratio is ${debtTolncomeRatio}`);
    } else {
        console.log("loan status :Not approved");
    }
    break; //break keyword is used to exit from the switch-case blocked when the case is matched
case "Unemployed":
    console.log("loan status denied");
    break;
    default:
        console.log("envalid employment status");
}
}
