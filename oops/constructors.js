const person = function(name){
    
    this.name=name;
    this.introduce=function(){
        console.log(`hello ${this.name}`);
        
    }
   
}
const person1 = new person('bhavesh')
const person2 = new person('tushar')

console.log(person1.introduce());
console.log(person2.introduce());


