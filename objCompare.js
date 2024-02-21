let obj1={name:"Person1",age:"5"};
let obj2={age:"5",name:"Person1"};
const keys = Object.keys(obj1);
const values=Object.values(obj1);
let obj1String = JSON.stringify(obj1);
let obj2String = JSON.stringify(obj2);

// Compare the strings
if (obj1String === obj2String) {
    console.log("The JSON objects are equal.");
} else {
    console.log("The JSON objects are not equal.");
}