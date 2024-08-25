let name={
    fname:'bhavesh',
    lname:'jadhav'
}
function fullName(){
    console.log(this.fname+this.lname);
    
}
fullName.call(name)