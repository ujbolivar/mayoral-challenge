import { useCallback } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Search from '../../utils/search';
import styles from './ProductList.module.css';

const ProductsList = ({ productsData, query }) => {
    const filteredProducts = useCallback(Search(productsData, query), [productsData, query]);

    return (
        <div className={styles.page}>
            <div className={styles.productList}>
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsList;
