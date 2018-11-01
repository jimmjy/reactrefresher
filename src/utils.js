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