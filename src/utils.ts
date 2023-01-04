import { ProductData, ProductDataListProps } from 'types/product_data';

export function filterProducts(productDataList: ProductData[], searchTerm: string): ProductData[] {
    return productDataList.filter((product) => {
        return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
}

export function search(query: string, productList: ProductData[]): ProductData[] {
    return productList.filter((product) => {
        return product.product.title.toLowerCase().includes(query.toLowerCase());
    });
}