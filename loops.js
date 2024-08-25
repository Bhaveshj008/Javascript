 let arr=[2,3,4,5,6,7,8,9]
// for (const element of arr) {
//     console.log(element)
// }
// let myName="bhavesh jadhav"
// let arrayOfName=[]
// for (const element of myName) {
//     if(element!=' ') arrayOfName.push(element);   
// }
// console.log(arrayOfName)
// for (const key in arr) {
//     console.log(arr[key]);
    
//  }
// arr.forEach((element,key,array) => {
//     console.log(element,key,array)
// });

let myobj={
    name: "bhavesh",
    rollNo:24
}
// for (const element in myobj) {
//     console.log(element, myobj[element]);
// }

let aMap= new Map();
console.log(typeof aMap);
for (const key in myobj) {
    aMap.set(key,myobj[key])
}
for (const [key, value] of aMap) {
    console.log(key,":-",value, aMap);
    
}



// let ArryofObject=[
//     {
//         name:"bhavesh",
//         rollNo:24
//     },
//     {
//         name:"tushar",
//         rollNo:19
//     },
//     {
//         name:"shiva",
//         rollNo:9
//     },
//     {
//         name:"akash",
//         rollNo:4
//     }
// ]
// for (const element of ArryofObject) {
//     console.log(element.name,"---",element.rollNo);
    
// }



// let arr=['bhavesh', 'tushar', 'ganya', 'sonya', 'monyqa', 'pintya'];
// let arrOfChars=[]
// arr.forEach(names=> {
//     names = (Array.from(names))
//     arrOfChars.push(names)
// });
// let newArr=arrOfChars.flat()
// console.log(newArr);


