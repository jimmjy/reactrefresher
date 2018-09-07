// arguments object - no longer bound with arrow functions
const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound

const user = {
    name: 'James',
    cities: ['Toronto', 'Montreal', 'New York'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    number: [1, 5, 9],
    multiplyBy: 4,
    // es6 method definition
    multiply() {
        return this.number.map((num) => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());