import React, { memo } from 'react';
import { useProducts } from '../../../hooks/useProducts';
import ProductCreationContainer from '../creation/container/product-creation.container';

import ProductList from './product-list.component';

interface ProductContainerProps {}

const ProductContainer: React.FC<ProductContainerProps> = props => {
    const { products } = useProducts();

    return (
        <>
            <ProductList data={products || []} />
            <ProductCreationContainer />
        </>
    );
};

export default memo(ProductContainer);
