class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return `Hello! Everyone, especially ${this.name} with your age ${this.age}.`;
    }

    updateAge() {
        return `Updated age is ${this.age = 25}`;
    }
}

const p1 = new Person('Aditya', 23);
const p2 = new Person('Adi', 23);

console.log(p1.sayHello());
console.log(p2.sayHello());
console.log(p2.updateAge());

class Student extends Person {
    static stuNumber = 0;
    
    constructor(name, age, stuId) {
        super(name, age);
        this._stuId = stuId;
        Student.stuNumber++;
    }

    id() {
        return this._stuId;
    }

    get stuId() {
        return this._stuId;
    }

    set stuId(newId) {
        if (typeof newId === 'string' && newId.startsWith('S')) {
            this._stuId = newId;
        } else {
            console.log('Invalid ID format');
        }
    }

    static message() {
        return "Welcome to the Student class";
    }

    static getTotalStudents() {
        return `Total number of students: ${Student.stuNumber}`;
    }
}

const s = new Student('Sapna', 21, 'S101');
const s1 = new Student('Sapna', 21, 'S102');
const s2 = new Student('Sapna', 21, 'S103');
const s3 = new Student('Sapna', 21, 'S104');

console.log(s.id());
console.log(s.sayHello());
console.log(Student.message());
console.log(Student.getTotalStudents());

s.stuId = 'S234';
console.log(s.id());
