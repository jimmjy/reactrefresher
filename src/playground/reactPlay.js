class OldSyntax {
    constructor() {
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this);
    };
    getGreeting() {
        return `Hi, my name is ${this.name}`;
    };
};

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

// -----------------
class NewSyntax {
    name = 'James';

    getGreeting = () => {
        return `Hi, my name is ${this.name}`;
    };
};

const newSyntax = new NewSyntax();
const getNewGreeting = newSyntax.getGreeting;
console.log(getNewGreeting());