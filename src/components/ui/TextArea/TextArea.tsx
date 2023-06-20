import { memo, FC, TextareaHTMLAttributes } from 'react';
import { TextareaContainer, StyledLabel, StyledTextArea, ValidateMessage } from './styled';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    message?: string;
    innerValue?: string;
}

const TextArea: FC<TextAreaProps> = ({ rows, label, placeholder, value, name, message, onChange }) => {
    return (
        <TextareaContainer>
            <StyledLabel>{label}</StyledLabel>
            <ValidateMessage>{message}</ValidateMessage>
            <StyledTextArea onChange={onChange} rows={rows} placeholder={placeholder} value={value} name={name} />
        </TextareaContainer>
    );
};

export default memo(TextArea);
