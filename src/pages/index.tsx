import { NextPage } from 'next';
import Head from 'next/head';
import NavBar from 'components/NavBar/NavBar';
import ProductList from '../components/ProductList/ProductList';

const HomePage: NextPage = () => {

    return (
        <main>
            <Head>
                <title>Mayoral</title>
            </Head>
            <header>
                <NavBar />
            </header>
            <section>
                <ProductList />
            </section>
        </main>
    );
};

export default HomePage;
