import { Product } from '@/types/all_typedefs';

// Describes the props that are passed to the Search function.

export type Query = string;

// Represents the function that is passed to the Search component as a prop.

export interface SetQuery {
    (query: Query): Product[];
}

export interface Search {
    (productsData: Product[], query: Query): Product[];
}

// Represents the props that are passed to the Search component.
export interface SearchProps {
    setQuery: SetQuery;
}
