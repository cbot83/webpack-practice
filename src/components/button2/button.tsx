import React from 'react';
import './button.less';

interface Props {
    children: string,
    color?: string
}

const Button = ({children, color}: Props) => {
    return (
        <button style={{color: `${color}`}} className="button2">{children}</button>
    )
}

export default Button;