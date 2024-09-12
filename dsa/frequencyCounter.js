function same(arr1, arr2){
    if(arr1.length !== arr2.length) return false;
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr2[j]=== arr1[i]**2){
                arr2.splice(j,1);
                break;
            }
            if(j==arr2.length-1) return false;
        }
    }
    return true;
}


console.log(same([15,4,6,4,9,5,10,5,6,3,6],[25, 16, 81, 25, 36, 9, 36, 100, 225, 16, 36]))