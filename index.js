// const myNum= 100.496756
// console.log(myNum.toFixed(2))
// const localeNum =46346563
// console.log(localeNum.toLocaleString("en-IN"));
// console.log(myNum.toPrecision(4));

// console.log(typeof myNum)
// const myNumber = new Number(100)
// console.log(myNumber.valueOf())
// console.log(typeof(myNumber.toString()))

// const a = 2;
// console.log(a.toExponential());



// ********************************                Math            **************************************************************

// console.log(Math.PI);
// const negVal= -2;
// console.log(Math.abs(negVal));


// const number= 34.57
// console.log(Math.ceil(number));
// console.log(Math.floor(number));

// console.log(Math.round(number));

// console.log(Math.min(2,4,5,6,7,1,3));
// console.log(Math.max(2,4,5,6,7,1,3));


// console.log(Math.random());
// console.log(Math.floor((Math.random()*10))+1);

// // rondom number generation between 10 to 20

// const min = 10
// const max = 30

// const randomNum= Math.floor(Math.random() * (max - min+1)) + min

// console.log(randomNum);





//----------------------------- date------------------------------------------


// let mydate= new Date();
// console.log(mydate.toString());
// console.log(mydate.toJSON());
// console.log(mydate.toTimeString());
// console.log(mydate.toLocaleDateString('en-IN'));
// let timestamp = Date.now();
// console.log(timestamp);


//----------------------------- array --------------------------

// let arr=new Array();
// console.log(arr)


// arr.push(2,3,4,5,5,6)
// console.log(arr)



// const newArr = arr.unshift(3)
// console.log(arr);
// console.log(newArr);


// let arr=[32,43,54,56,34,12,54,76]
// console.log(typeof(arr));

// console.log("A  ", arr);

// // slice creates a new array by copying elements from the start index up to, but not including, the end index. It does not modify the original array.
// console.log("using slice ", arr.slice(1, 4)); // [43, 54, 56]
// console.log("B  ", arr); // [32, 43, 54, 56, 34, 12, 54, 76]

// // splice takes the first parameter as the starting index and the second parameter as the count of elements to remove. It returns the removed elements.
// // Any additional parameters (from the third parameter onwards) are optional and are added to the array starting from the position where the elements were removed.
// console.log("using splice ", arr.splice(1, 4, 9999, 6666)); // [43, 54, 56, 34]
// console.log("C  ", arr); // [32, 9999, 6666, 12, 54, 76]





const friends= ['bhavesh','tushar', 'shiva', 'shiv', 'shishir','ashish']
const anotherFriends= ['ganya', 'sonya','monya', 'ajay']
//  console.log(friends.push(anotherFriends))
//  console.log(friends);

// const allFriends=friends.concat(anotherFriends)
//  console.log(allFriends);

// const allFriends = [...friends,...anotherFriends]
// console.table(allFriends);


// const randomArray=[1,2,3,4,[5,6,7],[8,9,10,[11,12,13,14]]]
// console.table(randomArray)
// const realRandomArray= randomArray.flat(Infinity)
// console.table(realRandomArray)

// console.log(Array.isArray("bhavesh"));
// console.log(Array.from("bhavesh"));// reate an arrray of iterable
// console.log(Array.from({name:"bhavesh"}));//Interesting for interview.. it returns an empty array ... we have to tell first that "kis chhij ka aaray banau .. keys or value"


// To create an array from the values or keys of an object, we need to specify what we want to extract.
const obj = { name: "bhavesh", age: 25 };

// Using Object.keys to create an array of the keys
console.log("Keys: ", Array.from(Object.keys(obj))); // ["name", "age"]

// Using Object.values to create an array of the values
console.log("Values: ", Array.from(Object.values(obj))); // ["bhavesh", 25]

// Using Object.entries to create an array of key-value pairs
console.log("Entries: ", Array.from(Object.entries(obj))); // [["name", "bhavesh"], ["age", 25]]
 
 //

 const score1=234
 const score2=235
 const score3=236
 const score4=237
 console.log(Array.of(score1,score2,score3,score4));
 