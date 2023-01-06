import Sort from '../../../src/utils/sort';
import { Product } from 'types/product_data';
import MOCK_PRODUCTS from '../mock_products';

describe('Sort products with Sort function', () => {
    test('Sort products in ascending order', () => {
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
        expect(Sort(MOCK_PRODUCTS, 'asc')).toStrictEqual(result);
    });

    test('Sort products in descending order', () => {
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
        expect(Sort(MOCK_PRODUCTS, 'desc')).toStrictEqual(result);
    });
});
