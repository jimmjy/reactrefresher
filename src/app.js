class IndecisionApp extends React.Component {

    render () {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer!';
        const options = ['Thing one', 'Thing two', 'Thing four'];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    };
};

class Header extends React.Component {
    
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    };
};

class Action extends React.Component {
    // class methods
    handlePick() {
        alert('handlepick');
    };

    render () {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    };
};

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    };

    //class methods
    handleRemoveAll () {
        // alert('handleRemoveAll')
        console.log(this.props.options);
    };

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                <p>Options component here, it's length is {this.props.options.length}</p>
                {
                    this.props.options.map((option) => <Option key={option} option={option} />)
                }
                
            </div>
        );
    };
};

class Option extends React.Component {
    render() {
        return (
           <div>
               <p>Option: {this.props.option}</p>
           </div> 
        );
    };
};

//setup form with input and submit button
// wire up onSubmit
// handleAddOption -> fetch the value typed -> if value, then alert

class AddOption extends React.Component {
    // class methods
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        if(option) {
            alert('Options');
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" placeholder="type option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    };
};


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));