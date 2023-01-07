import { useCallback } from 'react';
import ProductCard from 'components/ProductCard/ProductCard';
import styles from './ProductList.module.css';
import{ Search, Sort }from 'utils/all_utils';

const ProductList = ({ productsData, query, order }) => {
    const transformedProductsData = useCallback(
        () => Sort(Search(productsData, query), order),
        [productsData, query, order],
    );

    return (
        <div className={styles.page}>
            <div className={styles.productList}>
                {transformedProductsData().map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
