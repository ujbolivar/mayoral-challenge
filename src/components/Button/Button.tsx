import { useEffect, useMemo } from 'react';
import styles from './Button.module.css';

const Button = ({ variant, text }) => {
    return (
        <>
            {variant === 'button' ? (
                <button className={styles.Button} value={text} >
				{text}
				</button>
            ) : variant === 'buttonAlt' ? (
                <button className={styles.ButtonAlt} value={text} >
				{text}
				</button>
            ) : (
                <></>
            )}
        </>
    );
};

export default Button;
