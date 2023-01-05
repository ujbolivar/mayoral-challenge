import React from 'react';
import { SortProps } from 'types/sort_props';
import styles from './SortControls.module.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { grey } from '@mui/material/colors';

const Sort = ({ setOrder }: SortProps) => {

	const handleChange = (order) => {
		return setOrder(order);
	}

    return (
        <div className={styles.sort}>
            <button onClick={() => handleChange('desc')}><RemoveIcon sx={{ color: grey[200], fontSize: 50, strokeWidth: 3, stroke: grey[200] }}/></button>
            <button onClick={() => handleChange('asc')}><AddIcon sx={{ color: grey[200], fontSize: 50, strokeWidth: 3, stroke: grey[200] }}/></button>
        </div>
    );
};

export default Sort;