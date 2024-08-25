// console.log(this);
// function abc(){
//     let name="bhavesh"
//     console.log(this.name)
// }
// abc()

// const data={
//     name:"bhavesh",
//     greeting:function () {
//         console.log(`hello dear ${this.name}`);
//     }
// }
// console.log(data.greeting());

// let add =(a,b)=>a+b;
// console.log(add(2,3));

let functionObj= ()=>{
    const data={
        name:"bhavesh",
        greeting:(function () {
            console.log(`hello dear ${this.name} how are you`);
        }).call({ name: "Bhavesh" })
    }
    return data.greeting;
}
console.log(functionObj());

//()(); IIFE: Imediatelt invoked function expression: One of the main reasons for using IIFE (Immediately Invoked Function Expressions) is to avoid polluting the global scope. IIFE creates a new scope for your variables and functions, which helps keep the global scope clean.


