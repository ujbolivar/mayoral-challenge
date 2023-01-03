export interface ProductData {
    product: {
        id: number;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
        rating: {
            rate: number;
            count: number;
        }
    },
}

export interface ProductDataListProps {
    productDataList: ProductData[];
	error: boolean;
}