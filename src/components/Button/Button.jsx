import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <Button {...props} className={'button'+ props.className}>

        </Button>
    );
}

export default Button;