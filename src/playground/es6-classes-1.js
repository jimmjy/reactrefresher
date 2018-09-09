class Person {
    constructor (name = 'Anonymous', age = 0) {
        this.name = name; //this refers to the class instance
        this.age = age;
    };

    getGreeting() {
        //return 'Hi!, I am ' + this.name + '!';
        return `Hi!, I am ${this.name} !`;
    };

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    };

};

// sub classes using extends to bring attritbues of person class
class Student extends Person {
    constructor(name, age, major) {
        super(name, age); // this allows us to take the default constructor from person without needed to actually set them up.
        this.major = major;
    };

    hasMajor() {
        return !!this.major;
    };

    // overrides the person method
    getDescription() {
        let description = super.getDescription();
        
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }
        return description;
    };
};

const me = new Student('James Finkelstein', 30, 'Computer Science');
console.log(me);
console.log(me.hasMajor());
console.log(me.getDescription());

const other = new Student();
console.log(other);
console.log(other.hasMajor());
console.log(other.getDescription());
