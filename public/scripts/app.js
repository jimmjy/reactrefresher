'use strict';

var nameVar = 'James';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

var nameLet = 'Jen';
nameLet = 'Julie';
console.log(nameLet);

var nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Manny';
    return petName;
};

// Block scoping

var fullName = 'James Finkelstein';
var firstName = void 0;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
};

console.log(firstName);
