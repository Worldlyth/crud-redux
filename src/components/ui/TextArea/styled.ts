import styled from 'styled-components';

export const StyledTextArea = styled.textarea`
    width: 100%;
    font-family: inherit;
    padding: 0.5rem;
    border: 1px solid #000;
    border-radius: 0.5rem;
    outline: none;
    box-sizing: border-box;
    font-size: 1rem;
    margin-bottom: 1rem;
    resize: none;
    &:focus {
        border-color: #000;
    }
    &::placeholder {
        gray: #000;
    }
`;

export const StyledLabel = styled.label`
    display: block;
    font-size: 1rem;
    margin-bottom: 0.5rem;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
`;
