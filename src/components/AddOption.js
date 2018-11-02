import React from 'react';

class AddOption extends React.Component {
    state = {
        error: undefined
    }
    
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
    };

    //this handles reading the value from the input field and gets and error if nothing is present or if the same value is added.  I creates the text to render to the display
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form 
                    onSubmit={this.handleAddOption}
                    className='add-option'
                >
                    <input type="text" name='option' className='add-option__input' />
                    <button className='button'>Add Option</button>
                </form>
            </div>
        );
    };
};

export default AddOption;