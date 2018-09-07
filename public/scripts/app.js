'use strict';

var details = {
    title: 'Hey! these are some details you can now see!!!',
    toggle: false
};

var toggleVisibility = function toggleVisibility(e) {
    e.preventDefault();
    details.toggle = !details.toggle;
    render();
};

var render = function render() {
    var JSX = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            details.toggle ? 'Hide Details' : 'Show Details'
        ),
        details.toggle && React.createElement(
            'p',
            null,
            details.title
        )
    );

    ReactDOM.render(JSX, document.getElementById('app'));
};

render();
