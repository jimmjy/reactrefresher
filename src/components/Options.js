import React from 'react';
import Option from './Option.js';

const Options = (props) => (
        <div>
            <div className='widget-header'>
                <h3 className='widget-header__title'>Your Options</h3>
                <button 
                    onClick={props.removeAll}
                    className='button button--link'
                >
                Remove All
                </button>
            </div>

            {props.options.length === 0 && <p className='widget__message'>Add an option to get started</p>}
            {
                props.options.map((option, i) => (
                    <Option
                        key={i}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                        count={i + 1}
                    />
                ))
            }
        </div>
    );

export default Options;