console.log('utils.js is running');

const square = (x) => {
    return x * x;
};

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

//exporting - default exports - named exports

//named exports
export { square, add, subtract as default }; //you export the thing you want ot export and put the name // can also export something as default but can only have 1

//second export default
// export default subtract;

// ------------- example code -----------------------
// // import subtract, { square, add } from './utils.js';
// // // the default import can be named anything in here
// // //eg. we can call subtract = anythingIwant and call that instead
// // import senior, { isAdult, canDrink } from './person.js';

// // console.log('testing file');

// // console.log(square(4));
// // console.log(add(5, 7));

// // console.log('Is Adult: ', isAdult(30));
// // console.log('Is Adult: ', isAdult(15));

// // console.log('Can drink? ', canDrink(30));
// // console.log('Can drink? ', canDrink(15));

// // console.log(subtract(10, 2));

// // console.log(senior(70));

// import validator from 'validator';

// console.log('is workings');

// console.log(validator.isEmail('test@gmail.com'));