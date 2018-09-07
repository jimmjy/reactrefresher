function square(x) {
    return x * x;
};

const squareArrow = (x) => x * x;

console.log(square(8));

const fullName = 'James Finkelstein';

// regular arrow function
const getFirstName = (name) => {
    const firstName = name.split(' ')[0];
    return firstName;
};

console.log(getFirstName(fullName));

// shorthand arrow function
const firstName = (name) => name.split(' ')[0];

console.log(firstName(fullName));