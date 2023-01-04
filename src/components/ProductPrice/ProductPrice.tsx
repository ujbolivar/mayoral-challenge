import { useState, useEffect } from 'react';
import styles from './ProductPrice.module.css';
import { ProductData } from '../../types/product_data';

const ProductPrice = ({ product }: ProductData) => {
    const [discount, setDiscount] = useState({ active: false, value: 0 });

    const renderResult = () => {
        if (discount.active) {
            return (
                <div className={styles.discountPrice}>
                    <div className={`${styles.productPrice}, ${styles.productPriceSlashed}`}>
                        {product.price} €
                    </div>
                    {(product.price - product.price * (discount.value / 100)).toFixed(2)} € (-
                    {discount.value}%) €
                </div>
            );
        } else {
            return (
                    <div className={styles.productPrice}>{product.price} €</div>
            );
        }
    };

	//Set a discount value to certain items.

    useEffect(() => {
        if (product.id % 2 === 0) {
            setDiscount({ active: true, value: 20 });
        }
    }, [product.id]);

    return <div className={styles.container}>{renderResult()}</div>;
};

export default ProductPrice;
