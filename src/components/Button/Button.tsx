import styles from './Button.module.css';

const Button = ({ name, category, variant, action }) => {
    return (
        <button
            name={name}
            className={`${
                variant === 'button'
                    ? styles.Button
                    : variant === 'buttonAlt' && category === 'electronics'
                    ? styles.ButtonNone
                    : styles.ButtonAlt
            }`}
            value={name}
            onClick={action}
        >
            {name === 'Añadir' ? name.toUpperCase() : name}
        </button>
    );
};

export default Button;
