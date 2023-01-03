import { useState, useEffect } from 'react';
import { Product } from './ProductCard.interface';
import styles from './ProductCard.module.css';
import ProductImage from 'components/ProductImage/ProductImage';
import Button from '../Button/Button';

const ProductCard = ({ product }: Product) => {
    const [discount, setDiscount] = useState({ active: false, value: 0 });

    useEffect(() => {
        if (product.id % 2 === 0) {
            setDiscount({ active: true, value: 20 });
        }
    }, [product.id]);

    return (
        <div className={styles.productCard}>
            <div className={styles.imageContainer}>
                <ProductImage
                    src={product.image}
                    alt="imagen de producto"
                />
            </div>
            <h3 className={styles.productTitle}>{product.title}</h3>
            <div className={styles.productPrice}>{product.price} €</div>
            {discount.active ? (
                <div className={styles.discountPrice}>
                    {(product.price - product.price * (discount.value / 100)).toFixed(2)} €(-
                    {discount.value}%) €
                </div>
            ) : null}
            <a href="#" className={styles.productOptionsLink}>
                más colores
            </a>
            <Button text="AÑADIR" />
        </div>
    );
};

export default ProductCard;
