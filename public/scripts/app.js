'use strict';

var render = function render() {
    var temp = React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'hello'
        )
    );

    ReactDOM.render(temp, document.getElementById('app'));
};

render();
