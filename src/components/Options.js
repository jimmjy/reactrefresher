import React from 'react';
import Option from './Option.js';

const Options = (props) => (
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

export default Options;