import { Product } from '@/types/all_typedefs';

// Describes the props that are passed to the Search function.

export type query = string;

// Represents the function that is passed to the Search component as a prop.

export interface setQuery {
    (list: Product[], query: query): void;
}

// Represents the props that are passed to the Search component.
export interface SearchProps {
    setQuery: setQuery;
}
