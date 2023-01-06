import { Product } from 'types/product_data';

function Sort(list: Product[], order: 'asc' | 'desc') {
    return list.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (order === 'desc') {
            return titleB.localeCompare(titleA);
        }
        if (order === 'asc') {
            return titleA.localeCompare(titleB);
        }
    });
}

export default Sort;
