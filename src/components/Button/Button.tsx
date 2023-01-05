import styles from './Button.module.css';

const Button = ({ name, category, variant, text, action }) => {
    return (
        <>
            {category === 'electronics' && variant === 'buttonAlt' ? (
                <button className={styles.ButtonNone} value={text} onClick={action}>
                    {text}
                </button>
            ) : variant === 'button' ? (
                <button name={name} className={styles.Button} value={text} onClick={action}>
                    {text}
                </button>
            ) : variant === 'buttonAlt' ? (
                <button name={name} className={styles.ButtonAlt} value={text} onClick={action}>
					{action}
                    {text}
                </button>
            ) : (
                <></>
            )}
        </>
    );
};

export default Button;
