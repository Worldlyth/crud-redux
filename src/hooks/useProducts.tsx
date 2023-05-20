import { useEffect, useState } from 'react';
import { Product_URL } from '../constants/api.constants';
import { ProductModel } from '../models/product.model';
import { fetchProductsApi } from '../services/product-api.service';

export const useProducts = () => {
    const [products, setProducts] = useState<ProductModel[]>();
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean | null>(null);

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
        fetchProducts().then(response => setProducts(response?.data));
    }, []);
    return { products, error, loading };
};
