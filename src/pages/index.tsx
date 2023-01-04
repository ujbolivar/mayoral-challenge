import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import { useState } from 'react';
import NavBar from 'components/NavBar/NavBar';
import ProductList from '../components/ProductList/ProductList';
import { GetProducts } from '../lib/productData_api';
import { ProductData, ProductDataListProps } from '../types/product_data';
import styles from '../styles/home.module.css';

export const getStaticProps: GetStaticProps = async (_context) => {
    const products: ProductData[] = await GetProducts();
    return {
        props: {
            productDataList: products,
        },
    };
};

const HomePage: NextPage<ProductDataListProps> = ({ productDataList }: ProductDataListProps) => {
    const [query, setQuery] = useState('');

    return (
        <main className={styles.page}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <title>Mayoral</title>
            </Head>
            <header className={styles.header}>
                <NavBar query={query} setQuery={setQuery} />
            </header>
            <section>
                <ProductList productsData={productDataList} query={query} />
            </section>
        </main>
    );
};

export default HomePage;
