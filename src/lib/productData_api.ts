import { ProductData } from '../types/product_data';

export async function GetProducts(url): Promise<ProductData[]> {
	const response = await fetch(url);
	const productData = await response.json() as ProductData[];
	return productData;
}