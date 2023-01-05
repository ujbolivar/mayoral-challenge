import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { grey } from '@mui/material/colors';
import styles from './SortControls.module.css';
import { SortProps } from 'types/sort_props';

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
            <button
                name="Orden productos por nombre en orden descendiente"
                onClick={() => handleChange('desc')}
            >
                <RemoveIcon
                    sx={{ color: grey[desc], fontSize: 50, strokeWidth: 3, stroke: grey[desc] }}
                />
            </button>
            <button
                name="Ordenar productos por nombre en orden ascendiente"
                onClick={() => handleChange('asc')}
            >
                <AddIcon
                    sx={{ color: grey[asc], fontSize: 50, strokeWidth: 3, stroke: grey[asc] }}
                />
            </button>
        </div>
    );
};

export default Sort;
