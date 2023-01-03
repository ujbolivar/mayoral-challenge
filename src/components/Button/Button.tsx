import React from 'react';
import styles from './Button.module.css';
//import AddButtonProps from './AddButton.interface';

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
