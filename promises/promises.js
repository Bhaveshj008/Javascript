// const promise =new Promise((resolve, reject)=>{
//     setTimeout(()=>{

//         console.log("async task is complete");
//         resolve()
//     },1000)
// })
// promise.then(()=>{
//     console.log("promised consumed");

// })

// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Async task 2 completed");
//         resolve();

//     },1000)
// })
// .then(()=>{
//     console.log("async 2 consumed")
// })

// const promise3 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("promise three is created...")
//         resolve({
//             name:"bhavesh",
//             age:"22"
//         })
//     }, (1000));
// })
// promise3.then((t)=>{
//     console.log("promised 3 is resolved with this value",t.name);

// })

// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error =false;
//         if(!error){
//             resolve("Promised 4 resolved")
//         }else{
//             reject("Error: something wents happen...")
//         }
//     },1000)
// })
// .then((res)=>{
//     console.log(res);
//     return res+ " another .then"
// }).then((res)=>{
//     console.log(res);

// })
// .catch((err)=>{
//     console.log(err);
// })
// .finally(()=>console.log('promise is either rejectedd or resolved'));


// const promise5 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error= true;
//         if(!error){
//             resolve('promise 5 resolved')  
//         }else{
//             reject('something wents wrong')
//         }
//     },1000)
// })

// async function consumePromise5() {

//     try {
//         const response = await promise5
//         console.log(response);
//     } catch (error) {
//         console.log(error);

//     }

// }
// consumePromise5()

// // .then() is useful for straightforward promise chains and cases where you need more control over each step.
// // async/await is preferable for cleaner, more readable code, especially when dealing with multiple sequential asynchronous operations.



// // async function blogs() {
// // try {
// //     const response = await fetch("https://www.bhaveshjadhav.online/api/blogs")
// //     const data = await response.json()
// //     for (const element of data) {
// //         console.log(element.coverImage.url)
// //     }

// // } catch (error) {
// //     console.log("Error in fetching blogs: ",error); 
// // }
// // }

// // blogs()

// // fetch("https://www.bhaveshjadhav.online/api/blogs")
// // .then((response)=>{
// //     return (response.json())
// // })
// // .then((data)=>{
// //     setTimeout(() => {
// //         console.log(data);
// //     }, 1000);

// // })
// // .catch((err)=>{
// //     console.log("E: ",err);

// // })




// const promiseFunction= function () {
//     const promise6= new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             error=false;
//             if(!error){
//                 resolve('promised 6 resolve')
//             }else{
//                 reject('Error generated')
//             }
//         },5000)
//     })
//     return promise6
// };
// promiseFunction().then((res)=>{
//     console.log(res);
// })
// .catch(err=>console.log(err));















const cartItems = ['banana', 'apple', 'pineapple', 'mango']

const logedIn = true

function createCart(cartItems) {
    return new Promise((resolve, reject) => {
        if (logedIn) {
            setTimeout(() => {
                for (const products of cartItems) {
                    console.log(products);
                }
                resolve('Items added to the cart ')
            }, 1000)
            
        } else {
            reject('unable to add products in the cart')
        }
    })
}

createCart(cartItems)
    .then((message) => {
        console.log(message);
        return proceedToPayment()  
    })
    .then((payInfo) => {
        console.log(payInfo);
    })
    .catch((err) => console.log(err))




function proceedToPayment() {
    return new Promise((resolve, reject) => {
        const orderId = generateOrderId()
        if (orderId) {
            resolve(`payment Successfull with orderId ${orderId}`)
        } else {
            reject('order id not found')
        }
    })
}

function generateOrderId() {
    const orderId= 34566
    return orderId;
}


