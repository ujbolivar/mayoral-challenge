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
			<div className="styles.icon">
				<span className="material-icons" >search</span>
			</div>
			<input
			type="text"
			className={styles.searchInput}
			placeholder="Buscar"
			value={searchTerm}
			onChange={handleSearchTerm}
			/>
        </div>
    );
    };

export default SearchBar;