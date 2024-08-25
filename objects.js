
// const sym1=Symbol("key1");
// const myObj={
//     name:'bhavesh',
//     [sym1]:'symbol',
//     "current address":'chh. sambhaji nagar',
//     email:'bhavesh@gmail.com',
//     phone:'9067872194'
// }
// console.log(myObj);

// // Accessing property using dot notation
// console.log(myObj.name); // Accesses 'name' property directly (valid for fixed identifiers)

// // Accessing property using bracket notation
// console.log(myObj["name"]); // Accesses 'name' property using a string or variable (supports dynamic keys and special characters)

// //console.log(myObj.current address);// this line will gives an error... we not able to accessed spaced key using .   we have to add brackets.
// console.log(myObj["current address"])



// myObj.grittings=function() {
//     console.log(`Hello, ${myObj["name"]}`);    
// }
// myObj.grittingsTwo=function() {
//     console.log(`Hello, ${this.name}`);    
// }


// console.table(myObj.grittings());
// console.table(myObj.grittingsTwo());
// console.table(typeof myObj[sym1]);
// Object.freeze(myObj)///// after freeze we will not able to modify the object



//--------------------------------------------------






const users = new Object()
console.log(users);
const rollCall = {
    1: "bhavesh",
    2: "tushar"
}
const anotherRollCall = {
    3: "shiva",
    4: "ajay"
}
//-----------------------------------------------------


// // Merging objects using Object.assign
// const newRollCall = Object.assign(rollCall, anotherRollCall);
// console.log(anotherRollCall);

// console.log(newRollCall); // Outputs the merged result, modifying rollCall directly
// console.log(rollCall);   // Outputs the updated rollCall, which has been modified

//--------------------------------------------------

// // Merging objects using Object.assign with an empty target object
// const newRollCall = Object.assign({}, rollCall, anotherRollCall);
// console.log(newRollCall); // Outputs the merged result, with a new object created
// console.log(rollCall);   // Outputs the original rollCall, which remains unchanged

//-----------------------------------------------------------

//latest method for combining the array.. that is the spread operator like the arrays..


// const newRollCall={...rollCall, ...anotherRollCall}
// console.log(newRollCall);

//---------------

const newobj = {
    1: "bhavesh",
    2: "tushar",
    3: "shiva",
    4: "akash",
    5: "ganya"
}

// console.log(Object.keys(newobj));//return type array[]
// console.log(Object.values(newobj));//return type array[]
// console.log(Object.entries(newobj));//return type array[]

// console.log(newobj.hasOwnProperty(5));// it checks the propperty is available in the array or not.. returns boolean value

//-----------------------------------

//destructuring

const course = {
    courseName: "javascript",
    instructor: "hitesh bhau",
    student: "bhavesh"
}

const { instructor } = course;
const { instructor: master } = course;
console.log(course.instructor);
console.log(instructor);
console.log(master);


