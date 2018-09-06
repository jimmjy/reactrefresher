var nameVar = 'James';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log(nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Manny';
    return petName;
};

// Block scoping

const fullName = 'James Finkelstein';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
};

console.log(firstName);