'use strict';

// arguments object - no longer bound with arrow functions
var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound

var user = {
    name: 'James',
    cities: ['Toronto', 'Montreal', 'New York'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};

console.log(user.printPlacesLived());

// challenge

var multiplier = {
    number: [1, 5, 9],
    multiplyBy: 4,
    // es6 method definition
    multiply: function multiply() {
        var _this2 = this;

        return this.number.map(function (num) {
            return num * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
