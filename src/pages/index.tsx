import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import NavBar from 'components/NavBar/NavBar';
import ProductList from 'components/ProductList/ProductList';
import { fetchProducts } from 'lib/productData_api';
import styles from 'styles/home.module.css';
import { ProductData, ProductDataListProps } from 'types/product_data';

const HomePage: NextPage<ProductDataListProps> = () => {
    const [query, setQuery] = useState('');
    const [order, setOrder] = useState('');

    const { data: productsData, isLoading, isError } = useQuery<ProductData[], Error>('products', fetchProducts);
    const memoizedProductsData = useMemo(() => {
        if (isLoading) return 'Loading...';
        if (isError || !productsData) return 'An error has occurred';
        return <ProductList productsData={productsData} query={query} order={order} />;
    }, [productsData, query, order]);

    return (
        <main className={styles.page}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <title>Mayoral</title>
            </Head>
            <header className={styles.header}>
                <NavBar setQuery={setQuery} setOrder={setOrder} />
            </header>
            <section>{memoizedProductsData}</section>
        </main>
    );
};

export default HomePage;
