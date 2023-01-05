import styles from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';
import SortControls from '../SortControls/SortControls';

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
