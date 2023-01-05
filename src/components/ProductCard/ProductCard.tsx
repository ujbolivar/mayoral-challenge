import ProductImage from 'components/ProductImage/ProductImage';
import ProductPrice from 'components/ProductPrice/ProductPrice';
import Button from 'components/Button/Button';
import styles from './ProductCard.module.css';
import { ProductData } from 'types/product_data';

const ProductCard = ({ product }: ProductData) => {
    const añadir = `el usuario ha añadido ${product.title} al carrito`;
    const colores = `El usuario desea ver el producto ${product.title} en otros colores`;

    return (
        <div className={styles.productCard}>
            <ProductImage src={product.image} alt="imagen de producto" />
            <h3 className={styles.productTitle}>{product.title}</h3>
            <ProductPrice product={product} />
            <Button
                name="más colores"
                category={product.category}
                variant="buttonAlt"
                text="más colores"
                action={colores}
            />
            <Button
                name="Añadir"
                category={product.category}
                variant="button"
                text="AÑADIR"
                action={añadir}
            />
        </div>
    );
};
export default ProductCard;
