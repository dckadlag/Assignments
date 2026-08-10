//Assignment 8:
let langauge:string="Java is a popular programming language. Java is used for web development, mobile applications, and more.";
let word:string="Java";
let indexces:number[]=[];
let index:number=langauge.indexOf(word);
while (index!== -1){
    indexces.push(index);
    index=langauge.indexOf(word,index+word.length);

}
console.log("Total no of instances:", indexces.length);
console.log("Indexces:", indexces);