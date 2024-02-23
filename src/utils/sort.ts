import { setOrder } from '@/types/all_typedefs';

// Sorts the list of products based on the order passed as a prop.

export const Sort: setOrder = (list, order) => {
    console.log('list:', list);
    return list.sort((a, b) => {
        const discountA = a.id % 2 === 0 ? 0.8 : 1;
        const discountB = b.id % 2 === 0 ? 0.8 : 1;
        const priceA: number = a.price * discountA;
        const priceB: number = b.price * discountB;
        return order === 'desc' ? priceA - priceB : priceB - priceA;
    });
};
