import { memo, FC, TextareaHTMLAttributes } from 'react';
import { StyledForm, StyledLabel, StyledTextArea } from './styled';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}

const TextArea: FC<TextAreaProps> = ({ rows, label, placeholder }) => {
    return (
        <StyledForm>
            <StyledLabel>{label}</StyledLabel>
            <StyledTextArea rows={rows} placeholder={placeholder} />
        </StyledForm>
    );
};

export default memo(TextArea);
