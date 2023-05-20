import React from 'react';
import { SApp } from './assets/styles/app.styles';
import ProductCard from '././components/product/card/product-card.component';
import { productListData } from './data/product.data';
import { fetchProductsApi } from './services/product-api.service';
import { Product_URL } from './constants/api.constants';
import ProductListContainer from './components/product/list/product-list.container';

function App() {
    return (
        <SApp>
            <ProductListContainer />
        </SApp>
    );
}

export default App;
