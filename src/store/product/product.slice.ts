import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductState } from '../../models/state/product-state.model';
import { ProductModel } from '../../models/product.model';

const initialState: ProductState = {
    products: [],
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductsAction: (state: ProductState, action: PayloadAction<ProductModel[]>) => {
            state.products = action.payload;
        },
        createProductAction: (state: ProductState, action: PayloadAction<ProductModel>) => {
            state.products.unshift(action.payload);
        },
    },
});

export const { setProductsAction, createProductAction } = productSlice.actions;

export default productSlice.reducer;
