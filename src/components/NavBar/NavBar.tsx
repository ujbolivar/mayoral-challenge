import SearchBar from 'components/SearchBar/SearchBar';
import SortControls from 'components/SortControls/SortControls';
import styles from './NavBar.module.css';

const NavBar = ({ setQuery, setOrder }) => {
    return (
        <div className={styles.container}>
            <nav className={styles.navBar}>
                <SearchBar setQuery={setQuery} />
                <SortControls setOrder={setOrder} />
            </nav>
        </div>
    );
};

export default NavBar;
