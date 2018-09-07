'use strict';

function square(x) {
    return x * x;
};

var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(square(8));

var fullName = 'James Finkelstein';

// regular arrow function
var getFirstName = function getFirstName(name) {
    var firstName = name.split(' ')[0];
    return firstName;
};

console.log(getFirstName(fullName));

// shorthand arrow function
var firstName = function firstName(name) {
    return name.split(' ')[0];
};

console.log(firstName(fullName));
