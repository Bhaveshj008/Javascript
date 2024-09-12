class proffessors {
    constructor(name, dept){
        this.name = name;
        this.dept = dept;
    }
    introduce = function() {
        console.log(`Hellow, My name is ${this.name} and I'm the Proffessor of ${this.dept} department`)
    }
}

const gulve = new proffessors('A.K. Gulve', 'MCA').introduce();
const shetiye = new proffessors('Shetiye', 'MCA').introduce()
