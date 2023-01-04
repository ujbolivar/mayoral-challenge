import styles from './SearchBar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import { grey } from '@mui/material/colors';

const SearchBar = ({ setQuery }) => {
    return (
        <div className={styles.container}>
            <SearchIcon sx={{ color: grey[500] }} />
            <input
                type="text"
                className={styles.searchInput}
                placeholder="Buscar"
                // value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
