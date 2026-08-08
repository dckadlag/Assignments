interface Employee{
    name: string;
    baseSalary:number;
    experience:number;
    rating: number;
}
const employees:Employee[]=[
    {name: "Alice johnson", baseSalary:75000, experience:5.1, rating: 4.2},
    {name: "Bob Smith", baseSalary: 68000, experience: 3.2, rating: 3.8},
    {name: "Carol Davis", baseSalary: 82000, experience: 7.1, rating: 4.5},
    {name: "David Brown", baseSalary: 90000, experience: 10.2, rating: 2.5},
    {name: "Eva Green", baseSalary: 60000, experience: 2.4, rating: 3.5},
];
const hikeMap=new Map<string, string>();
for (const emp of employees){
let variablePayPercentage = 0;
let bonus =0;
if (emp.rating>=4){
    variablePayPercentage=15;
    bonus=1500;
} else if (emp.rating>=3 && emp.rating<4){
    variablePayPercentage=10;
    bonus=1200;
}else {
    variablePayPercentage=3;
    bonus =300;
}
const reward =emp.experience>=5?500:0;

const hike =(emp.baseSalary * (variablePayPercentage/100))+bonus+reward;
const hikepercentages= (hike/emp.baseSalary)*100;
hikeMap.set(emp.name, `$(hikepercentages.toFixed(2)}%`);
}
    console.log("Employee Hike Percentage");
    hikeMap.forEach((value, key)=>{
    console.log(`${key}: ${value}`);
});