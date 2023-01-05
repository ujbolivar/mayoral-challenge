import { useCallback } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Search from '../../utils/search';
import Sort from '../../utils/sort';
import styles from './ProductList.module.css';

const ProductsList = ({ productsData, query, order }) => {

    const filteredProducts = useCallback(
        () => Sort(Search(productsData, query), order),
        [productsData, query, order],
    );

    return (
        <div className={styles.page}>
            <div className={styles.productList}>
                {filteredProducts().map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsList;
