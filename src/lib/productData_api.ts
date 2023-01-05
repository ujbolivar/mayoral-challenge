import { ProductData } from '../types/product_data';

export async function GetProducts(): Promise<ProductData[]> {
    const response = await fetch('https://fakestoreapi.com/products/');
    const productsData = (await response.json()) as ProductData[];
    return productsData;
}
