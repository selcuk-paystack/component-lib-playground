import React from 'react';
import styled, { css } from 'styled-components';
import { Button as AntButton } from 'antd';
import { ButtonProps } from 'antd/lib/button/button';

interface IButtonProps {
    testProp: string;
}

const StyledButton = styled((props: ButtonProps & IButtonProps) => (
    <AntButton {...props} />
))`
    ${(props) =>
        props.type === 'primary' &&
        css`
            background: palevioletred;
            border: 1px solid pink;

            &:hover,
            &:focus {
                background: palevioletred;
                border: 1px solid red;
            }
        `}
`;

export { StyledButton };
