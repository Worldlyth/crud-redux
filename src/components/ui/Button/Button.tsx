import React, { memo, FC, ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ children }) => {
    return <StyledButton>{children}</StyledButton>;
};

export default memo(Button);
