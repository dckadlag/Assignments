//Assignment-3 (Arrays/Datatypes/operator)
let names: string[]=["suresh","Mahesh", "Naresh"];

let marks: number[] = [75, 80, 82];
let addMarks: number[] = [];
let total=0;

for (let i = 0; i <marks.length; i++) {
    addMarks[i] = marks[i] + 10;
    //console.log(addMarks[i]);
    total+=addMarks[i]
    console.log(names[i] +":" +addMarks[i]);
}
//identify the average marks for all studesnt
let average=total/addMarks.length;
console.log(`Average marks ${average}`);