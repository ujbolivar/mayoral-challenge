import { Product } from './all_typedefs';

// Describes the props that are passed to the Sort component and function.

export interface SortOrder {
    readonly asc: string;
    readonly desc: string;
}

export type Order = SortOrder['asc'] | SortOrder['desc'];
// Represents the function that is passed to the Sort component as a prop.

export interface setOrder {
    (order: Order): void;
}

// Represents the props that are passed to the Sort component.
export interface SortProps {
    setOrder: setOrder;
}

export interface SortFn {
    (list: Product[], order: Order): Product[];
}
