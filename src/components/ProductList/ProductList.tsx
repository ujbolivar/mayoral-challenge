// import { useMemo } from 'react';
import ProductCard from '../ProductCard/ProductCard';
// import Search from '../../utils/search';
import styles from './ProductList.module.css';
import { ProductData } from '../../types/product_data';


const ProductsList = ({ productsData, query }) => {
    // const memoizedProducts = useMemo(() => productsData, [productsData]);

    const filteredProducts = productsData.filter((product): ProductData[] => {
        return product.title.toLowerCase().includes(query.toLowerCase());
    });

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
