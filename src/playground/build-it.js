//converted build it to react method
class VisibilityToggle extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            toggle: false,
            hide: 'Hide Details',
            show: 'Show Details',
            title: 'Hey! these are some details you can now see!!!!'
        };
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    };

    //class methods
    handleToggleVisibility() {
        const newToggle = !this.state.toggle;
        this.setState(() => {
            return {
                toggle: newToggle
            }
        });
    };
    render () {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.toggle ? this.state.hide : this.state.show}</button>
                <p>{this.state.toggle && this.state.title}</p>
            </div>
        );
    };
};

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

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

