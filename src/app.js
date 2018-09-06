//JSX - JavaScript XML
// Babel compiled code

// going to be using if statements
// terniary
// logical operators

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
};

var template = (
    <div>
        <h1>{app.title}</h1> 
        <p>{app.subtitle}</p>
        <ol>
            <li>Item One</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'James',
    age: 27,
    location: 'Toronto'
};

function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'unknown';
    }
};

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {getLocation(user.location)}</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);