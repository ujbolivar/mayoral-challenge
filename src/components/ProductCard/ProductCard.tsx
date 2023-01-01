import React from 'react';
import Product from './ProductCard.interface';
import styles from './ProductCard.module.css';
import Button from '../AddButton/AddButton';

const ProductCard = ({ product }: Product) => {
    
    return (
    <div className={styles.productCard} key={product.id}>
        <img className={styles.productImage} src={product.image} alt={product.title} />
        <h3 className={styles.productTitle}>{product.title}</h3>
        <p className={styles.productPrice}>{product.price}</p>
        <p className={styles.productDescription}>{product.description}</p>
        <Button />
    </div>
    )
}

export default ProductCard;