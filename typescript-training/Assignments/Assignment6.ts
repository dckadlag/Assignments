//Assignment 06
function prime(n:number):boolean{
    if (n<=1){
        return false;
    
    }
    for (let i=2;i*i<=n;i++){
        if(n%i===0){
            return false;
        }
    }
    return true;

}
console.log(prime(7));
console.log(prime(25));
console.log(prime(1));

