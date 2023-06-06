import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    padding: 20px;
    background-color: white;
    gap: 20px;
`;

export const ImageWrapper = styled.div`
    background-color: white;
    display: flex;
    height: 240px;
    padding: 10px;
    justify-content: center;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

export const Image = styled.div`
    display: flex;
    width: 240px;
    height: 240px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

export const Title = styled.div`
    font-size: 20px;
    margin: 0 auto;
    text-align: left;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Price = styled.div`
    font-size: 24px;
    margin-left: auto;
`;
