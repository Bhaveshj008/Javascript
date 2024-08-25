const btn= document.querySelector('.btn')
btn.addEventListener('click', function(){
    handlePromise()
})

const p1= new Promise((resolve, reject) => {
    setTimeout(()=>resolve('p1 resolve'),10000)
})
const p2= new Promise((resolve, reject) => {
    setTimeout(()=>resolve('p2 resolve'),5000)
})

async function handlePromise() {
    const val1 = await p1;
    console.log('hellow p1');
    console.log(val1);
    const val2 = await p2;
    console.log('hellow p2');
    console.log(val2);
}

