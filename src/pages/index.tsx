import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import NavBar from 'components/NavBar/NavBar';
import ProductList from '../components/ProductList/ProductList';
import { ProductData, ProductDataListProps } from '../types/product_data';
import { GetProducts } from '../lib/productData_api';
import styles from '../styles/home.module.css'

export const getStaticProps: GetStaticProps = async (_context) => {
    const products: ProductData[] = await GetProducts();
    return {
        props: {
            productDataList: products,
        },
    };
};

const HomePage: NextPage<ProductDataListProps> = ({ productDataList }: ProductDataListProps) => {
    return (
        <main className={styles.page}>
            <Head>
                <title>Mayoral</title>
            </Head>
            <header className={styles.header}>
                <NavBar />
            </header>
            <section>
                <ProductList productsData={productDataList} />
            </section>
        </main>
    );
};

export default HomePage;
