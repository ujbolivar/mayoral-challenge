import { useMemo, useEffect, useState } from 'react';
import styles from './ProductPrice.module.css';
import { ProductData } from 'types/product_data';
import { handleDiscount } from 'helpers/handleDiscount';

const ProductPrice = ({ product }: ProductData) => {
    const discount = 20;
    const [flag, setFlag] = useState(false);
    const [total, setTotal] = useState(0);

    const renderResult = useMemo(() => {
        if (flag) {
            return (
                <div className={styles.discountPrice}>
                    <div className={`${styles.productPrice}, ${styles.productPriceSlashed}`}>
                        {product.price} €
                    </div>
                    {total} € (-
                    {discount}%)
                </div>
            );
        } else {
            return <div className={styles.productPrice}>{product.price} €</div>;
        }
    }, [flag, product]);

    useEffect(() => {
        handleDiscount(product.id, product.price, discount, setFlag, setTotal);
    }, [product]);

    return <div className={styles.container}>{renderResult}</div>;
};

export default ProductPrice;
