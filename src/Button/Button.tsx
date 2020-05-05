import React from 'react';
import { StyledButton } from './styles';

const Button = (props) => {
    return <StyledButton data-testid="test-button" {...props} />;
};

export default Button;
