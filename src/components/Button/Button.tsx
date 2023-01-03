import React from 'react';
import styles from './Button.module.css';
//import AddButtonProps from './AddButton.interface';

const Button = ({ text }) => {
    return (
        <button className={styles.Button} value={text}>{text}</button>
        );
    };

export default Button;