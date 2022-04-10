import styles from "../styles/Pokeball.module.css";

const PokeballSpinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ball} />
    </div>
  );
};

export default PokeballSpinner;
