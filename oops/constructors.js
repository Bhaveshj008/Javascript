// const Person = function(name, surname){
    
//     this.name=name;
//     this.introduce=function(){
//         console.log(`hello ${this.name} ${this.surname}`);
        
//     }
   
// }
// Person.surname = 'jadhav';
// console.log(Person.surname);

// const person1 = new Person('bhavesh', 'jadhav')
// const person2 = new Person('tushar', 'gujanwar')

// console.log(person1.introduce());
// console.log(person2.introduce());


function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  Person.prototype.nationality = "English";
  console.log(Person.prototype.nationality);
  
  
  const myFather = new Person("John", "Doe", 50, "blue");
  console.log(Person.nationality);
  const myMother = new Person("Sally", "Rally", 48, "green");
  console.log(Person.nationality);
  
console.log("The nationality of my father is " + myFather.nationality); 