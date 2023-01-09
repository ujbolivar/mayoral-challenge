import { useMemo, useEffect, useState } from 'react';
import styles from './ProductPrice.module.css';
import { handleDiscount } from 'helpers/handleDiscount';

const ProductPrice = ({ id, price }) => {
    const discount = 20;
    const [flag, setFlag] = useState(false);
    const [total, setTotal] = useState(0);

    const renderResult = useMemo(() => {
        if (flag) {
            return (
                <div className={styles.discountPrice}>
                    <div className={`${styles.productPrice}, ${styles.productPriceSlashed}`}>
                        {price} €
                    </div>
                    {total} € (-
                    {discount}%)
                </div>
            );
        } else {
            return <div className={styles.productPrice}>{price} €</div>;
        }
    }, [flag]);

    useEffect(() => {
        handleDiscount(id, price, discount, setFlag, setTotal);
    }, [id, price]);

    return <div className={styles.container}>{renderResult}</div>;
};

export default ProductPrice;
