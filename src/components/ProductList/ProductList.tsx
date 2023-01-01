import Image from 'next/image';
import { useState, useEffect } from 'react';

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products/category/clothing');
            const data = await response.json();
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
        loading ?
        //<spinner /> :
        products ?
        products.map((product) => (
            <div key={product.id}>
            <Image src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            </div>
            )) :
            error ?
            <div>{error}</div> :
            <div>No data</div> :
            <></>
            );
        };
        
        export default ProductsList;
        
        
        
        
        