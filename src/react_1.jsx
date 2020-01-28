import React from 'react';
import ReactDOM from 'react-dom';

const React_1 = () => {
    return (
        <div>First react component</div>
    )
}

const wrapper = document.getElementById("react_1");
ReactDOM.render(<React_1 />, wrapper);