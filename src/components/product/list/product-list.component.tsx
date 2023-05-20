import React, { memo } from 'react';
import styled from 'styled-components';
import { ProductModel } from '../../../models/product.model';
import ProductCard from '../card/product-card.component';

interface IProductListProps {
    data: ProductModel[];
}

const ProductList: React.FC<IProductListProps> = props => {
    const { data } = props;

    return (
        <SProductList>
            {data.map((product, index) => {
                return <ProductCard key={product.id} {...data[index]} />;
            })}
        </SProductList>
    );
};

export default memo(ProductList);

const SProductList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    background-color: #70798c;
    padding: 40px;
    border-radius: 20px;
`;
