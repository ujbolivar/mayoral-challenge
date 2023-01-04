import styles from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';
import SortControls from '../SortControls/SortControls';

const NavBar = ({ setQuery }) => {

    const handleSort = (sortMethod: 'asc' | 'desc') => {
        sortMethod === 'asc'
            ? console.log('Ascending')
            : sortMethod === 'desc'
            ? console.log('Descending')
            : console.log('Invalid sort method');
    };

    return (
        <div className={styles.container}>
            <nav className={styles.navBar}>
                <SearchBar setQuery={setQuery} />
                <SortControls onSort={handleSort} />
            </nav>
        </div>
    );
};

export default NavBar;
