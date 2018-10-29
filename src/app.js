class IndecisionApp extends React.Component {
    render() {

        const title = 'Indecision';
        const subTitle = 'Put your life in the hands of a computer';
        const options = ['Thing One', 'Thing Two', 'Thing Three'];

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    };
};

class Action extends React.Component {
    handlePick() {
        console.log('alert');
    };
    render () {
        return (
            <div>
                <button onClick={this.handlePick}>What Should I Do?</button>
            </div>
        );
    };
};

class Options extends React.Component {
    handleRemoveAll () {
        alert('removed all');
    };

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option) => 
                    {
                        return (
                            <div>
                                <Option key={option} optionText={option} />
                            </div>
                        )})
                }
            </div>
        );
    };
};

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>Option: {this.props.optionText}</p>
            </div>
        );        
    };
};

class AddOption extends React.Component {
    handleAddOption (e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        if(option) {
            alert(option);
        };
    };

    render () {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name='option'/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    };
};


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));