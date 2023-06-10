import React, { memo } from 'react';
import { ProductModel } from '../../../models/product.model';
import { Card, ImageWrapper, Image, Info, Title, Price } from './styled';
import ProductCardDescription from './description/product-card-description.component';
import { MAX_LENGTH } from '../../../constants/product-card-description.constans';

type ProductCardProps = ProductModel;

const ProductCard: React.FC<ProductCardProps> = ({ description, image, price, title }) => {
    return (
        <Card>
            <ImageWrapper>
                <Image style={{ backgroundImage: `url(${image})` }} />
            </ImageWrapper>
            <Info>
                <Title>{title}</Title>
                <ProductCardDescription text={description} maxLength={MAX_LENGTH} />
            </Info>
            <Price>{price}$</Price>
        </Card>
    );
};

export default memo(ProductCard);
