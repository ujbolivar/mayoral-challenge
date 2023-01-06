export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
};
export interface ProductData {
    product: Product;
}

export interface ProductDataListProps {
    productsData: ProductData[];
}
