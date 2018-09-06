'use strict';

//JSX - JavaScript XML
// Babel compiled code

// going to be using if statements
// terniary
// logical operators

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
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

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        getLocation(user.location)
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
