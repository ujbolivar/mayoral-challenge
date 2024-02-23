import styles from './Button.module.css';

const Button = ({ name, category, variant, text, action }) => {
    return (
                <button name={name} className={`${variant === 'button' ? styles.Button : variant === 'buttonAlt' && category === 'electronics' ? styles.ButtonNone : styles.ButtonAlt}`} value={text} onClick={action}>
                    {text}
                </button>
    );
};

export default Button;
