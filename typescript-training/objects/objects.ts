//objects:=> object is non premitive datatypes that stores multiple properties in form of key value paire
//1. storing the data insde the objects:
console.log("1. storing the data inside the objects");
interface empInfo{
    "empName": string,
    "empId": number,
    "visaStatus": boolean,
    //"salary?": number
    "adress": {
        "street": string,
        "city": string,
        "State": string,
        //"country?": string
    }
}
let empData: empInfo={
    "empName": "Dhananjay",
    "empId": 12354,
    "visaStatus": true,
    "adress":{
        "street": "123 ganore road",
        "city": "Sangamner",
        "State": "Maharashtra"

    }

}

//2. how to access data 
console.log("access the data from object")
console.log(empData.empName);
console.log(empData ["empName"]);

//3. adding additional properties to the existing objects:
console.log("3. adding additional property to the existing object")
"empData.salary=200000;";
//empData.adress.country="India";

//4. updating existing property within the existing object
console.log("4. access the existing property within the existing object")
empData.empName="Dhananjay Kadlag";
console.log(empData);

//5. Delete the existing property from existing objects
console.log("5. deleting the existing property within the existing object");
//delete empData.empId;
console.log(empData);

// 6. check if property exists inside the objects

 console.log("6. check if property exists inside the objects");
 console.log("visa status" in empData);
 console.log("salary" in empData)

//7. get all the keys from an objects
console.log("7. get all the keys from an objects");
console.log(Object.keys(empData));

//8. get all the values from an objects
console.log("8. get all the values from an objects");
console.log(Object.values(empData));

//9. get all the entry from an objects
console.log("9. get all the entry from an objects");
console.log(Object.entries(empData));

//10. Iterate through the objects using for ...in loop
console.log("10. Iterate through the objects using for ...in loop");
for (let key in empData){
    console.log(`${key}: ${empData[key as keyof empInfo]}`);
}

//11. verify the data type of the property within the objects 
console.log("11. verify the data type of the property within the objects");
console.log(typeof empData.empName);
console.log(typeof empData.empId);
console.log(typeof empData.visaStatus);
//console.log(typeof empData.salary);
console.log(typeof empData.adress);

//12. Merge two different objects using spread objects 
interface companyInfo {
    companyName: string,
    companyId: number,
    companyAdress: string
}
let companyData:companyInfo={
companyName: "DK Tech solutions",
companyId: 14526,
companyAdress: "416 ganore road street, jawale kadlag, sangamner"

}
let mergeData= {...empData, ...companyData};
console.log(mergeData);