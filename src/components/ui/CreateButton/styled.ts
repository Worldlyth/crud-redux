import styled from 'styled-components';

export const Button = styled.button`
    position: fixed;
    bottom: 20px;
    font-size: 30px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid #000;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    outline: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    &:hover {
        transform: scale(1.2);
        background-color: #000;
        color: #fff;
    }
`;
