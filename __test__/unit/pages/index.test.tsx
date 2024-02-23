import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../../../src/pages/index';
import MOCK_PRODUCTS from '../mock_products';


describe('HomePage', () => {
    it('renders a heading', () => {
        render(<HomePage productsData={MOCK_PRODUCTS as any} />);

    });
});
