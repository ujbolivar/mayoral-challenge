import React from 'react';
import { SortProps } from './Sort.interface';
import styles from './Sort.module.css';

const Sort = ({ onSort }: SortProps) => {
    return (
        <div className={styles.sort}>
            <button onClick={() => onSort('asc')}>+</button>
            <button onClick={() => onSort('desc')}>-</button>
        </div>
    );
};

export default Sort;