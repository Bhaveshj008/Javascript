const prompt = require('prompt-sync')();
//createOrder
//proceedToPayment
//showOrder
//updateWallet

let ballance=20000;
const cartItemsWithPrizes=[
        {
            item: 'dhoti',
            price: 200
        },
        {
            item: 'kurta',
            price: 300
        },
        {
            item: 'pant',
            price: 200
        },
        {
            item: 'top',
            price: 100
        }
]


function validateCart(cartItemsWithPrizes){
    if (cartItemsWithPrizes.length!=0) {
        return true
    }
    else return false
}

function createOrder(cartItemsWithPrizes) {
    return new Promise((resolve, reject) => {
        if(validateCart(cartItemsWithPrizes)){
            setTimeout(()=>{
                let totalBill= cartItemsWithPrizes.reduce((acc, curVal)=>{
                    return acc+curVal.price;
                },0)
                console.log('Order has been created');
                const orderId= Math.floor(Math.random() * (900000 - 100000+1)) + 100000
                resolve({"total Bill": totalBill, "orderId": orderId})
            },1000)   
        }else{
            let err = new Error('unable to create order...')
            reject(err)
        }
    })
}


function proceedToPayment(message){
    return new Promise((resolve, reject) => {
        const proceed = prompt("Do you want to procced for payment 'y' for yes 'n' for no : ")
        if(proceed=='y'){
            resolve(message)
        }else{
            reject('payment cancelled by the user ')
        }
    })
}

function showOrder(message){
    return new Promise((resolve, reject) => {
        if (message["orderId"]) {
            // resolve(`orderId: ${message["orderId"]}\n orderDetails: ${JSON.stringify(cartItemsWithPrizes, null, 2)} \n totalBill: ${message["total Bill"]}`)
            setTimeout(()=>{
                resolve({orderId: message["orderId"], orderDetails: cartItemsWithPrizes,totalBill: message["total Bill"]})
            },2000)
        }else{
            reject('Error in showing the oredr details')
        }
    })
}

function updateWallet(totalBill){
    return new Promise((resolve, reject) => {
        if (totalBill) {
            setTimeout(()=>{
                let updatedBalannce= ballance-totalBill;
                resolve(`Remaining Balance: ${updatedBalannce}`)
            },2000)
            
        }else{
            reject('Error in fetching the balance')
        }
        
    })
}


createOrder(cartItemsWithPrizes)
.then((message)=>{
    console.log(message); 
    return proceedToPayment(message)
})
.then((message)=>{
    console.log(`Payment successfull for the orderId ${message["orderId"]}`)
    return showOrder(message)
})
.then((orderDetails)=>{
    console.log(orderDetails);
    return orderDetails["totalBill"]   
})
.then((totalBill)=>{
    return updateWallet(totalBill)
})
.then((updatedWallet)=>{
    console.log(updatedWallet)
})
.catch((err)=>{
    console.error(err); 
})