//React way
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        this.addOneHandler = this.addOneHandler.bind(this);
        this.minusOneHandler = this.minusOneHandler.bind(this);
        this.resetHandler = this.resetHandler.bind(this);
    };

    componentDidMount() {
        try {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10);

            if (!isNaN(count)) {
                this.setState(() => ({ count }));
            };
        } catch (e) {
            //do Nothing
        }
        
    };

    componentDidUpdate (prevProps, prevState) {
      if (prevState.count !== this.state.count) {
          localStorage.setItem('count', this.state.count);
      };
    };
    
    

    addOneHandler () {
        //this.setState can take a function as an argument
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    };

    minusOneHandler() {
        this.setState((prevState) => {
            if (prevState.count > 0) {
                return {
                    count: prevState.count - 1
                };
            };            
        });
    };

    resetHandler () {
        this.setState(() => {
            return {
                count: 0
            };
        });
    };

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOneHandler}>+1</button>
                <button onClick={this.minusOneHandler}>-1</button>
                <button onClick={this.resetHandler}>Reset</button>
            </div>
        );
    };
};

ReactDOM.render(<Counter />, document.getElementById('app'));

//jsx way of doing counter
// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();