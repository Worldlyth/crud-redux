import React from 'react';
import { SApp } from './assets/styles/app.styles';
import ProductListContainer from './components/product/list/product-list.container';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
    return (
        <Provider store={store}>
            <SApp>
                <ProductListContainer />
            </SApp>
        </Provider>
    );
}

export default App;
