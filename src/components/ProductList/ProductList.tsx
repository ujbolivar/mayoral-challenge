import { useMemo } from 'react';
import styles from './ProductList.module.css';
import ProductCard from '../ProductCard/ProductCard';

const ProductsList = ({ productsData }) => {
    const memoizedProducts = useMemo(() => productsData, [productsData]);

    return (
        <div className={styles.page}>
            <div className={styles.productList}>
                {memoizedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsList;
