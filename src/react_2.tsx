import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button2/button';

interface Props {
    first?: string
    second?: number
    third?: boolean
}

const React_2 = ({first, second, third}: Props) => {
    return (
        <div>
            Second react component
            <Button color="hotpink">children</Button>
        </div>
    )
}

const wrapper = document.getElementById("react_2");
ReactDOM.render(<React_2 />, wrapper);