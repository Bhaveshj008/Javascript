function letterCounter(str){
    let res ={};
    for (const letter of str) {
        if(isNaN(letter) && res[letter]>0){
             res[letter]++
        }
        else if(isNaN(letter)){
            res[letter]=1
        }
    
    }
    return res
}
console.log(letterCounter("bhavesh is a good boy 1243"));