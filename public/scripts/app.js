'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//class
var Person = function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
};

var me = new Person('James', 30);

console.log(me);
