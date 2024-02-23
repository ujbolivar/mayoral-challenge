import { useMemo, useEffect, useState } from 'react';
import styles from './ProductPrice.module.css';
import { ProductData } from 'types/product_data';

const ProductPrice = ({ product }: ProductData) => {
    const [discount, setDiscount] = useState({ active: false, value: 0 });
    const [discountedPrice, setDiscountedPrice] = useState(product.price);

    const renderResult = useMemo(() => {
        if (discount.active) {
            return (
                <div className={styles.discountPrice}>
                    <div className={`${styles.productPrice}, ${styles.productPriceSlashed}`}>
                        {product.price} €
                    </div>
                    {discountedPrice.toFixed(2)} € (-
                    {discount.value}%)
                </div>
            );
        } else {
            return <div className={styles.productPrice}>{product.price} €</div>;
        }
    }, [discount, product.price]);

    useEffect(() => {
        let active = false;
        let value = 0;

        if (product.id % 2 === 0) {
            active = true;
            value = 20;
        }

        setDiscount({ active, value });

        const newPrice = active ? product.price - (product.price * (value / 100)) : product.price;

        setDiscountedPrice(newPrice);
    }, [product.id, product.price]);

    return <div className={styles.container}>{renderResult}</div>;
};

export default ProductPrice;
