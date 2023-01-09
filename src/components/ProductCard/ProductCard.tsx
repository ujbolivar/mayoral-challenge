import ProductImage from 'components/ProductImage/ProductImage';
import ProductPrice from 'components/ProductPrice/ProductPrice';
import Button from 'components/Button/Button';
import styles from './ProductCard.module.css';
import { logPayload } from 'helpers/buttonActions';
import { ProductData } from 'types/all_typedefs';

const ProductCard = ({ product }: ProductData) => {
    const { id, title, price, category, image } = product;

    return (
        <div className={styles.productCard}>
            <ProductImage src={image} alt="imagen de producto" />
            <h3 className={styles.productTitle}>{title}</h3>
            <ProductPrice id={id} price={price} />
            <Button
                name="más colores"
                category={category}
                variant="buttonAlt"
                action={() => logPayload('colores', title)}
            />
            <Button
                name="Añadir"
                category={category}
                variant="button"
                action={() => logPayload('añadir', title)}
            />
        </div>
    );
};
export default ProductCard;
