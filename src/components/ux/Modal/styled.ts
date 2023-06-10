import styled from 'styled-components';

export const ModalWrapper = styled.div`
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(30, 30, 30, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalTitle = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
`;

export const ModalContent = styled.div`
    background-color: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    width: 100%;
    max-width: 500px;
`;

export const ModalClose = styled.div`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.2);
    }
`;
