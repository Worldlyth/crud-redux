import React, { memo } from 'react';
import { useProducts } from '../../../hooks/useProducts';

import ProductList from './product-list.component';

interface IProductContainerProps {}

const ProductContainer: React.FC<IProductContainerProps> = props => {
    const { products, loading, error } = useProducts();

    return <ProductList data={products || []} />;
};

export default memo(ProductContainer);
