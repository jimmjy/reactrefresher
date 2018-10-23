//class
class Person {
    constructor(name = 'John Doe', age = 0) {
        this.name = name; 
        this.age = age;
    };

    getGreeting() {
        return `Hi, I am ${this.name}!`;
    };

    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    };
};

// old
// function person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const you = new person('john', 25);

const me = new Person('James Fink', 30);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());