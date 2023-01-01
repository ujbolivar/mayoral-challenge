import { useState, useEffect } from 'react';
import styles from './ProductList.module.css';
import Spinner from 'components/Spinner/Spinner';
import ProductCard from '../ProductCard/ProductCard';

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
            const data = await response.json();
            console.log(data);
            setProducts(data);
            setLoading(false);
        } catch (err) {
            setError(err);
        }
    }
    
    useEffect(() => {
        fetchProducts();
    }, []);
    
    return (
        <div className={styles.productList}>
        {loading ?
            <Spinner /> :
            products ?
            products.map((product, index) => (
                <ProductCard key={index} product={product} />
                )) :
                error ?
                <div>{error}</div> :
                <div>No data</div>
        }
            </div>
            );
        };
        
        export default ProductsList;
        
        
        
        
        