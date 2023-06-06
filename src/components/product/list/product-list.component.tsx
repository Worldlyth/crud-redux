import React, { memo } from 'react';
import { ProductModel } from '../../../models/product.model';
import ProductCard from '../card/product-card.component';
import { ProductListContainer } from './styled';

interface ProductListProps {
    data: ProductModel[];
}

const ProductList: React.FC<ProductListProps> = props => {
    const { data } = props;

    return (
        <ProductListContainer>
            {data.map((product, index) => {
                return <ProductCard key={product.id} {...data[index]} />;
            })}
        </ProductListContainer>
    );
};

export default memo(ProductList);
