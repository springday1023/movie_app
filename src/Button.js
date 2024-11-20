
import styles from "./style/button.module.css";

function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className={styles.button} type="button">{text}</button>
  );
}

export default Button;
