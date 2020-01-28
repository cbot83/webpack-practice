import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button2/button.jsx';

const React_2 = () => {
    return (
        <div>
            Second react component
            <Button>another button</Button>
        </div>
    )
}

const wrapper = document.getElementById("react_2");
ReactDOM.render(<React_2 />, wrapper);