import { useEffect, useState } from 'react';
import { Product_URL } from '../constants/api.constants';
import { fetchProductsApi } from '../services/product-api.service';
import { setProductsAction } from '../store/product/product.slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../models/state/product.selectors';

export const useProducts = () => {
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean | null>(null);

    const dispatch = useDispatch();
    const products = useSelector(selectProducts);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            return await fetchProductsApi(Product_URL);
        } catch (e) {
            setError(`Something went wrong! Error: ${e}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts().then(response => {
            if (response) dispatch(setProductsAction(response.data));
        });
    }, [dispatch]);
    return { products, error, loading };
};
