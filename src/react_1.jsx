import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button1/button';

const React_1 = () => {
    return (
        <div>
            First react component
            <Button>I'm a button</Button>
        </div>
    )
}

const wrapper = document.getElementById("react_1");
ReactDOM.render(<React_1 />, wrapper);