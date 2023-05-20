import React, { memo } from 'react';
import styled from 'styled-components';
import { ProductModel } from '../../../models/product.model';

type ProductCardProps = ProductModel;

const ProductCard: React.FC<ProductCardProps> = props => {
    const { id, category, description, image, price, rating, title } = props;
    return (
        <SProductCard>
            <SProductImageWrapper>
                <SProductImage style={{ backgroundImage: `url(${image})` }} />
            </SProductImageWrapper>
            <SProductInfo>
                <SProductTitle>{title}</SProductTitle>
                <SDescription>{description}</SDescription>
            </SProductInfo>
            <SPrice>{price}$</SPrice>
        </SProductCard>
    );
};

export default memo(ProductCard);

const SProductCard = styled.div`
    display: flex;
    border-radius: 20px;
    display: flex;
    padding: 20px;
    background-color: #f5f1ed;
    gap: 20px;
`;

const SProductImageWrapper = styled.div`
    border-radius: 20px;
    background-color: white;
    display: flex;
    height: 140px;
    padding: 10px;
    justify-content: center;
    border: dashed #252323 1px;
`;

const SProductImage = styled.div`
    display: flex;
    width: 140px;
    height: 140px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

const SProductTitle = styled.div`
    font-size: 20px;
    margin: 0 auto;
`;

const SProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const SDescription = styled.div`
    font-size: 16px;
    text-align: left;
`;

const SPrice = styled.div`
    font-size: 24px;
    margin-left: auto;
`;
