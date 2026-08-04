//conditional statements and Loops
let transcations =[50000, -2000, 3000, -200, -300, 4000, -3000];
let credit=0, debit=0;
let creditAmount=0, debitAmount=0;
let balance =0, suspicious=0;

for (let i=0;i<transcations.length;i++)
{
    if(transcations[i]>0){
        credit++;
        creditAmount+=transcations[i];
    }else
    {
        debit++;
        debitAmount+=transcations[i];
    }
    balance+=transcations[i];
    if(transcations[i]>10000 || transcations[i]<-10000)
    {
        console.log("suspicious Transcations", transcations[i] );
        suspicious++;
    }
}
console.log("Credit Transcation", credit);
console.log("Debit Transcation", debit);
console.log("Total credited", creditAmount);
console.log("Total Debited", debitAmount);
console.log("Remaining Balance", balance);
console.log("Suspicious Transcation", suspicious);
