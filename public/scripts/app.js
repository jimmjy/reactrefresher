'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//converted build it to react method
var VisibilityToggle = function (_React$Component) {
    _inherits(VisibilityToggle, _React$Component);

    function VisibilityToggle(props) {
        _classCallCheck(this, VisibilityToggle);

        var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

        _this.state = {
            toggle: false,
            hide: 'Hide Details',
            show: 'Show Details',
            title: 'Hey! these are some details you can now see!!!!'
        };
        _this.handleToggleVisibility = _this.handleToggleVisibility.bind(_this);
        return _this;
    }

    _createClass(VisibilityToggle, [{
        key: 'handleToggleVisibility',


        //class methods
        value: function handleToggleVisibility() {
            var newToggle = !this.state.toggle;
            this.setState(function () {
                return {
                    toggle: newToggle
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Visibility Toggle'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleToggleVisibility },
                    this.state.toggle ? this.state.hide : this.state.show
                ),
                React.createElement(
                    'p',
                    null,
                    this.state.toggle && this.state.title
                )
            );
        }
    }]);

    return VisibilityToggle;
}(React.Component);

;

ReactDOM.render(React.createElement(VisibilityToggle, null), document.getElementById('app'));

// Old JSX way
// const details = {
//     title: 'Hey! these are some details you can now see!!!',
//     toggle: false
// };

// const toggleVisibility = (e) => {
//     e.preventDefault();
//     details.toggle = !details.toggle;
//     render();
// };

// const render = () => {
//     const JSX = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{details.toggle ? 'Hide Details' : 'Show Details'}</button>
//             {details.toggle && <p>{details.title}</p>}
//         </div>
//     );

//     ReactDOM.render(JSX, document.getElementById('app'));
// };

// render();
