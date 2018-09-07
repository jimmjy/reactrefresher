const details = {
    title: 'Hey! these are some details you can now see!!!',
    toggle: false
};

const toggleVisibility = (e) => {
    e.preventDefault();
    details.toggle = !details.toggle;
    render();
};

const render = () => {
    const JSX = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{details.toggle ? 'Hide Details' : 'Show Details'}</button>
            {details.toggle && <p>{details.title}</p>}
        </div>
    );
    
    ReactDOM.render(JSX, document.getElementById('app'));
};

render();

