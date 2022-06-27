import styles from "./Creche.module.css";

const Creche = ({ creche }) => {
  return (
    <div className={styles.creche_container}>
      <h3>Colégio Teste</h3>
      <p>Endereço: Rua Teste da Silva</p>
      <p>Bairro: Vila Cleunice</p>
      <p>São Paulo - SP </p>
      <p>Vagas disponíveis: 50</p>
    </div>
  );
};

export default Creche;
