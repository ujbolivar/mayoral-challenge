import styles from './Button.module.css';

const Button = ({ name, category, variant, text }) => {
    return (
        <>
            {category === 'electronics' && variant === 'buttonAlt' ? (
                <button className={styles.ButtonNone} value={text}>
                    {text}
                </button>
            ) : variant === 'button' ? (
                <button name={name} className={styles.Button} value={text}>
                    {text}
                </button>
            ) : variant === 'buttonAlt' ? (
                <button name={name} className={styles.ButtonAlt} value={text}>
                    {text}
                </button>
            ) : (
                <></>
            )}
        </>
    );
};

export default Button;
