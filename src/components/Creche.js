import styles from "./Creche.module.css";

const Creche = ({ creche }) => {
  return (
    <div className={styles.creche_container}>
      <h3>{creche.descricao}</h3>
    </div>
  );
};

export default Creche;
