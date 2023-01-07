import { setOrder } from '@/types/all_typedefs';

// Sorts the list of products based on the order passed as a prop.

export const Sort: setOrder = (list, order) => {
    return list.sort((a, b) => {
        const titleA: string = a.title.toLowerCase();
        const titleB: string = b.title.toLowerCase();
        return order === 'desc' ? titleB.localeCompare(titleA) : titleA.localeCompare(titleB);
    });
};
