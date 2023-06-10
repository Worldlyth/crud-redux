import { memo, FC, InputHTMLAttributes, useState } from 'react';
import { StyledForm, StyledInput, StyledLabel } from './styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
    innerValue?: string;
}

const Input: FC<InputProps> = ({ label, placeholder, className, defaultValue, value }) => {
    const [innerValue, setInnerValue] = useState(value ?? defaultValue ?? '');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInnerValue(e.target.value);
    };

    return (
        <StyledForm className={className}>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput placeholder={placeholder} value={innerValue} onChange={onChange} />
        </StyledForm>
    );
};

export default memo(Input);
