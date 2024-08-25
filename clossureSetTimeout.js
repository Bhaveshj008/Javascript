// function X(){
//     var i=1;
//     setTimeout(function(){
//         console.log(i);
//     },10000);
//     console.log("Namste Javascript");
// }
// X();

function X(){
    for(let i=1; i<=5; i++){
            setTimeout(function(){
                console.log(i);
            },i*1000);
        }    
    console.log("Namste javascript");
}
X();

//without using the let we have to print 1 2 3 4 5 6 after time interval of 1 sec
// function X(){
//     for(var i=1; i<=5; i++){
//         function close(x){
//             setTimeout(function(){
//                 console.log(x);
//             },x*1000);
//         }
       
//         close(i);
//     }
    
//     console.log("Namste javascript");
// }
// X();