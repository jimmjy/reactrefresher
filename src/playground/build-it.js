class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Hey! these are some details you can now see!!!',
            toggle: false
        };
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    };

    handleToggleVisibility (e) {
        e.preventDefault();
        this.setState((prevState) => {
            return {
                toggle: !prevState.toggle
            }
        });
    }


    render() {

        let buttonText = this.state.toggle ? 'Hide Details' : 'Show Details';

        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{buttonText}</button>
                <p>{this.state.toggle && this.state.title}</p>
            </div>
        );
    };
};

ReactDOM.render(<Visibility />, document.getElementById('app'));



// // Old JSX way
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

