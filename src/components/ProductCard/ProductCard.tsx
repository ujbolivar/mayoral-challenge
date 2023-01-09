import ProductImage from 'components/ProductImage/ProductImage';
import ProductPrice from 'components/ProductPrice/ProductPrice';
import Button from 'components/Button/Button';
import styles from './ProductCard.module.css';
import { logPayload } from 'helpers/buttonActions';
import { ProductData } from '@/types/all_typedefs';

const ProductCard = ({ product }: ProductData) => {
    return (
        <div className={styles.productCard}>
            <ProductImage src={product.image} alt="imagen de producto" />
            <h3 className={styles.productTitle}>{product.title}</h3>
            <ProductPrice product={product} />
            <Button
                name="más colores"
                category={product.category}
                variant="buttonAlt"
                action={() => logPayload('colores', product.title)}
            />
            <Button
                name="Añadir"
                category={product.category}
                variant="button"
                action={() => logPayload('añadir', product.title)}
            />
        </div>
    );
};
export default ProductCard;
