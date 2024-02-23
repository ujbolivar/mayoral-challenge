import { Product, setQuery } from '@/types/all_typedefs';

export const Search: setQuery = (list, query) => {
    return list.filter(({ title }: Product) => title.toLowerCase().includes(query.toLowerCase()));
};
