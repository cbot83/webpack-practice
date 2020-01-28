import React from 'react';
import ReactDOM from 'react-dom';

const React_2 = () => {
    return (
        <div>Second react component</div>
    )
}

const wrapper = document.getElementById("react_2");
ReactDOM.render(<React_2 />, wrapper);