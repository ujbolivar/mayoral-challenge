import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { SearchBarProps } from './SearchBar.interface';

const SearchBar = (props: SearchBarProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    
    return (
        <div className={styles.container}>
        <input
        className={styles.input}
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchTerm}
        />
        <button className={styles.button} onClick={() => props.onSearch(searchTerm)}>Search</button>
        </div>
    );
    };

export default SearchBar;