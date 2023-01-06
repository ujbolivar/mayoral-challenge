import styles from './Button.module.css';

const Button = ({ name, category, variant, text, action }) => {
    return (
        <>
            {category === 'electronics' && variant === 'buttonAlt' ? (
                <button
                    className={styles.ButtonNone}
                    onClick={() => console.log(action)}
                >
                    {text}
                </button>
            ) : variant === 'button' ? (
                <button
                    name={name}
                    className={styles.Button}
                    onClick={() => console.log(action)}
                >
                    {text}
                </button>
            ) : variant === 'buttonAlt' ? (
                <button
                    name={name}
                    className={styles.ButtonAlt}
                    onClick={() => console.log(action)}
                >
                    {text}
                </button>
            ) : (
                <></>
            )}
        </>
    );
};

export default Button;
