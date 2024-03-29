import { useRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { grey } from '@mui/material/colors';
import styles from './SearchBar.module.css';
import { SearchProps } from 'types/search_props';

const SearchBar = ({ setQuery }: SearchProps) => {
    const inputRef = useRef(null);

    const handleChange = () => {
        setTimeout(() => {
            setQuery(inputRef.current.value);
        }, 500);
    };

    return (
        <div className={styles.container}>
            <SearchIcon sx={{ color: grey[500] }} />
            <input
                type='text'
                className={styles.searchInput}
                placeholder='Buscar'
                ref={inputRef}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBar;
