
const isAdult = (age) => {
    if (age >= 18) {
        return 'You are an adult';
    } else {
        return 'You are not an adult';
    };
};

const canDrink = (age) => (age >= 19 ) ? 'You can drink!!' : 'You can\'t drink';

const isSenior = (age) => (age >= 65 );

export { isAdult, canDrink };
export default isSenior;