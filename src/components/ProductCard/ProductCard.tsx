import { ProductData } from '../../types/product_data';
import styles from './ProductCard.module.css';
import ProductImage from 'components/ProductImage/ProductImage';
import ProductPrice from 'components/ProductPrice/ProductPrice';
import Button from '../Button/Button';

const ProductCard = ({ product }: ProductData) => {

    return (
        <div className={styles.productCard}>
			<ProductImage src={product.image} alt="imagen de producto" />
            <h3 className={styles.productTitle}>{product.title}</h3>
			<ProductPrice product={product} />
			<Button variant="buttonAlt" text="más colores" />
            <Button variant="button" text="AÑADIR" />
        </div>
    );
};
export default ProductCard;
