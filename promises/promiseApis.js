const pr1= new Promise((resolve, reject) => {
    setTimeout(()=>reject('pr1 resolved'),6000)
    
})
const pr2= new Promise((resolve, reject) => {
    setTimeout(()=>reject('pr2 resolved'),3000)
})
const pr3= new Promise((resolve, reject) => {
    setTimeout(()=>resolve('pr3 resolved'),5000)
})

// Promise.all([pr1,pr2,pr3])
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.error(err)
// })

Promise.allSettled([pr1,pr2,pr3])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
})

Promise.race([pr1,pr2,pr3])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
})

Promise.any([pr1,pr2,pr3])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
})
