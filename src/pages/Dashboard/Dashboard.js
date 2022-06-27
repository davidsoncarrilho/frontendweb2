import Creche from "../../components/Creche";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.home}>
      <h2>Lista de colégios</h2>
      <div className="creche-list">
        {/* {loading && <p>Carregando...</p>} */}
        <div className="creche-card">
          <Creche />
        </div>{" "}
        <div className="creche-card">
          <Creche />
        </div>{" "}
        <div className="creche-card">
          <Creche />
        </div>{" "}
        <div className="creche-card">
          <Creche />
        </div>{" "}
        <div className="creche-card">
          <Creche />
        </div>{" "}
        <div className="creche-card">
          <Creche />
        </div>
        {/* {creches && creches.length === 0 && (
        <div className={styles.noposts}>
          <p>Não foram encontrados creches</p>
          <Link to="/creche/create" className="btn">
            Cadastrar Creche
          </Link>
        </div>
      )} */}
        {/* {creches &&
        creches.map((creche) => <Creche key={creche.id} post={creche} />)} */}
      </div>
    </div>
  );
};

export default Dashboard;
