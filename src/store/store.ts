import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productSlice from './product/product.slice';

const rootReducer = combineReducers({
    product: productSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
