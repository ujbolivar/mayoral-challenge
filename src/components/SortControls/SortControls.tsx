import { useState } from 'react';
import { SortProps } from 'types/sort_props';
import styles from './SortControls.module.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { grey } from '@mui/material/colors';

const Sort = ({ setOrder }: SortProps) => {
    const [desc, setDesc] = useState(200);
    const [asc, setAsc] = useState(200);

    const handleChange = (order) => {
        if (order === 'desc') {
            setDesc(500);
            setAsc(200);
        }
        if (order === 'asc') {
            setAsc(500);
            setDesc(200);
        }
        setOrder(order);
    };

    return (
        <div className={styles.sort}>
            <button id="desc" onClick={() => handleChange('desc')}>
                <RemoveIcon
                    sx={{ color: grey[desc], fontSize: 50, strokeWidth: 3, stroke: grey[desc] }}
                />
            </button>
            <button id="asc" onClick={() => handleChange('asc')}>
                <AddIcon
                    sx={{ color: grey[asc], fontSize: 50, strokeWidth: 3, stroke: grey[asc] }}
                />
            </button>
        </div>
    );
};

export default Sort;
