import { memo, FC, InputHTMLAttributes } from 'react';
import { InputContainer, StyledInput, StyledLabel, ValidateMessage } from './styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    innerValue?: string;
    message?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ label, placeholder, className, name, value, message, onChange }) => {
    return (
        <InputContainer className={className}>
            <StyledLabel>{label}</StyledLabel>
            <ValidateMessage>{message}</ValidateMessage>
            <StyledInput type='text' placeholder={placeholder} value={value} onChange={onChange} name={name} />
        </InputContainer>
    );
};

export default memo(Input);
