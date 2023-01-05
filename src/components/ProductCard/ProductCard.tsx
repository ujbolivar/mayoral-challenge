import { ProductData } from '../../types/product_data';
import styles from './ProductCard.module.css';
import ProductImage from 'components/ProductImage/ProductImage';
import ProductPrice from 'components/ProductPrice/ProductPrice';
import Button from '../Button/Button';

const ProductCard = ({ product }: ProductData) => {

	console.log(product.category);

    return (
        <div className={styles.productCard}>
			<ProductImage src={product.image} alt="imagen de producto" />
            <h3 className={styles.productTitle}>{product.title}</h3>
			<ProductPrice product={product} />
			<Button category={product.category} variant="buttonAlt" text="más colores" />
            <Button category={product.category} variant="button" text="AÑADIR" />
        </div>
    );
};
export default ProductCard;
