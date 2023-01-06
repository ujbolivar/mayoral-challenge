import Search from '../../../src/utils/search';
import { Product } from 'types/product_data';
import MOCK_PRODUCTS from '../mock_products';

describe('Search products with Search function', () => {
    test('Search products in with input AaaAZazZz. Input lower/uppercase should not have to be an explicit match to the product title.', () => {
        const result: Product[] = [
            {
                id: 1,
                title: 'AaAaZazZZ',
                price: 100,
                description: 'llalala',
                category: 'jewelery',
                image: '',
                rating: {
                    rate: 33,
                    count: 12,
                },
            },
        ];
        expect(Search(MOCK_PRODUCTS, 'AaaAZazZz')).toStrictEqual(result);
    });

    test('Search products in with input ZzZAaA. Input lower/uppercase should not have to be an explicit match to the product title.', () => {
        const result: Product[] = [
            {
                id: 2,
                title: 'zZzaAa',
                price: 10,
                description: 'llalala',
                category: 'electronics',
                image: '',
                rating: {
                    rate: 23,
                    count: 52,
                },
            },
        ];
        expect(Search(MOCK_PRODUCTS, 'ZzZAaA')).toStrictEqual(result);
    });

    test('Search products in with input KkkaZzAZz. Input lower/uppercase should not have to be an explicit match to the product title.', () => {
        const result: Product[] = [
            {
                id: 0,
                title: 'kKKazzazZ',
                price: 10,
                description: 'llalala',
                category: 'electronics',
                image: '',
                rating: {
                    rate: 23,
                    count: 52,
                },
            },
        ];
        expect(Search(MOCK_PRODUCTS, 'KkkaZzAZz')).toStrictEqual(result);
    });

    test('Search products in with input Az. Input lower/uppercase should not have to be an explicit match to the product title.', () => {
        const result: Product[] = [
            {
                id: 0,
                title: 'kKKazzazZ',
                price: 10,
                description: 'llalala',
                category: 'electronics',
                image: '',
                rating: {
                    rate: 23,
                    count: 52,
                },
            },
            {
                id: 1,
                title: 'AaAaZazZZ',
                price: 100,
                description: 'llalala',
                category: 'jewelery',
                image: '',
                rating: {
                    rate: 33,
                    count: 12,
                },
            },
        ];
        expect(Search(MOCK_PRODUCTS, 'Az')).toStrictEqual(result);
    });
});
