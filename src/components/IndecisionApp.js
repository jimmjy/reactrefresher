import React from 'react';
import AddOption from './AddOption.js';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import OptionModal from './OptionModal.js';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        title: 'Indecision',
        subTitle: 'Put your life in the hands of a computer',
        selectedOption: undefined,
        userChoice: ''
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

    componentWillUnmount() {
        console.log('componentWillUnmount');
    };


    //this removes all the options from the list to start again
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }));
    };

    //This picks a random choice in the list created to decide what to do
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * (this.state.options.length));
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: option }));
    };

    //this is a method to handle the actual input being passed.  It validates first, if it is blank or found to exist, it sends back a message to display to the screen.
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter a valid value to add';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exist';
        };

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    };

    handleCloseModal = () => {
        this.setState(() => ({ selectedOption: undefined }));
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
                <OptionModal 
                    selectedOption={this.state.selectedOption} 
                    handleCloseModal={this.handleCloseModal}
                />
            </div>
        );
    };
};

export default IndecisionApp;