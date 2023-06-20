import styled from 'styled-components';

export const StyledInput = styled.input`
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #000;
    border-radius: 0.5rem;
    outline: none;
    box-sizing: border-box;
    font-size: 1rem;
    margin-bottom: 1rem;
    &:focus {
        border-color: #000;
    }
    &::placeholder {
        color: gray;
    }
`;

export const StyledLabel = styled.label`
    display: block;
    font-size: 1rem;
    margin-bottom: 0.5rem;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
`;

export const ValidateMessage = styled.span`
    color: red;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    `
