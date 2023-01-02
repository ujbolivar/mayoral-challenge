import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import { grey } from '@mui/material/colors';
import { SearchBarProps } from './SearchBar.interface';

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    
    return (
        <div className={styles.container}>
			<SearchIcon sx={{ color: grey[500] }} />
			<input
			type="text"
			className={styles.searchInput}
			placeholder="...Buscar"
			value={searchTerm}
			onChange={handleSearchTerm}
			/>
        </div>
    );
    };

export default SearchBar;