class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.options ? [] : ['nothing'],
            title: 'Indecision',
            subTitle: 'Put your life in the hands of a computer'
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    componentDidMount() {

        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            };
        } catch (e) {
            //Do Nothing
        }
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        };        
    };

    componentWillUnmount () {
        console.log('componentWillUnmount');
    };
    

    //this removes all the options from the list to start again
    handleDeleteOptions () {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption (optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }));
    };

    //This picks a random choice in the list created to decide what to do
    handlePick() {
        const randomNum = Math.floor(Math.random() * (this.state.options.length));
        alert(this.state.options[randomNum]);
    };

    //this is a method to handle the actual input being passed.  It validates first, if it is blank or found to exist, it sends back a message to display to the screen.
    handleAddOption (option) {
        if(!option) {
            return 'Enter a valid value to add';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exist';
        };

        this.setState((prevState) => ({ options: prevState.options.concat([option])}));
    };

    render() {
        return (
            <div>
                <Header
                    subTitle={this.state.subTitle} 
                />
                <Action 
                    hasOption={this.state.options.length > 0} 
                    handlePick={this.handlePick} 
                />
                <Options 
                    options={this.state.options} 
                    removeAll={this.handleDeleteOptions} 
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    };
};

class AddOption extends React.Component {
    constructor (props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    };

    //this handles reading the value from the input field and gets and error if nothing is present or if the same value is added.  I creates the text to render to the display
    handleAddOption (e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';
        }
    };

    render () {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name='option'/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    };
};

//stateless functional components
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2> }
            
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision',
};

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOption}
            >
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.removeAll}>Remove All</button>
            {props.options.length === 0 && <p>Add an option to get started</p>}
            {
                props.options.map((option, i) => (
                    <Option 
                        key={i} 
                        optionText={option} 
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={() => {
                    props.handleDeleteOption(props.optionText)
                }}
            >
                Remove
            </button>
        </div>
    );
};



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));