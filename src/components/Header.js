import React from 'react';

const Header = (props) => (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
            <p>This is the header</p>

        </div>
    );

Header.defaultProps = {
    title: 'Indecision',
};

export default Header;