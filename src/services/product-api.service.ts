import axios, { AxiosResponse } from 'axios';
import { ProductModel } from '../models/product.model';

export const fetchProductsApi = (url: string): Promise<AxiosResponse<ProductModel[]>> => {
    return axios.get(url);
};
