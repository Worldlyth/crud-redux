import React, { memo, FC, ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLFormElement> {
    onSubmit?: () => void;
}

const Button: FC<ButtonProps> = ({ children, onSubmit }) => {
    return <StyledButton onClick={onSubmit}>{children}</StyledButton>;
};

export default memo(Button);
