import React from 'react';
import SortProps from './Sort.interface';
import styles from './Sort.module.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { grey } from '@mui/material/colors';

const Sort = ({ onSort }: SortProps) => {
    return (
        <div className={styles.sort}>
            <button onClick={() => onSort('desc')}><RemoveIcon sx={{ color: grey[200], fontSize: 100 }}/></button>
            <button onClick={() => onSort('asc')}><AddIcon sx={{ color: grey[200], fontSize: 100 }}/></button>
        </div>
    );
};

export default Sort;