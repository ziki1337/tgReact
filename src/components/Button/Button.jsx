import React from 'react';

const Button = (props) => {
    return (
        <Button {...props} className={'button'+ props.className}>

        </Button>
    );
}

export default Button;