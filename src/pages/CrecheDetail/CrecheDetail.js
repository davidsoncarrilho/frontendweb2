import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Creche from "../../components/Creche";
import { API } from "../../service/service";
import styles from "./Dashboard.module.css";

const CrecheDetail = () => {
  const { id } = useParams();
  const [creche, setCreche] = useState([]);

  const navigate = useNavigate();

  const getCreche = async () => {
    const {
      data: { creche: crecheDetail },
    } = await API.get(`/creche/${id}`);

    setCreche(crecheDetail);
  };

  useEffect(() => {
    getCreche();
  }, []);
  return (
    <div className={styles.home}>
      <h2 style={{}}>{creche.descricao}</h2>

      <div
        style={{
          width: 800,
          height: 600,
          backgroundColor: "white",
          padding: 15,
          display: "flex",
          flexDirection: "row",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
          backgroundColor: "white",
          padding: "15px",
          margin: "5px",
          borderRadius: "4px",
          boxShadow:
            "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
          transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
          fontWeight: "normal",
          flexWrap: "wrap",
        }}
      >
        <div className={styles.card}>
          <h3>Diretor: {creche.diretor}</h3>
        </div>
        <div
          onClick={() => navigate(`/dashboard/creche/${creche.id}/criancas`)}
          className={styles.card}
        >
          <h3>Crianças: {creche.alunos.length}</h3>
        </div>

        <div className={styles.bigCard}>
          <h3>Endereço</h3>
          <h4>Rua: {creche.endereco.rua}</h4>
          <h4>Número: {creche.endereco.numero}</h4>
          <h4>Bairro: {creche.endereco.bairro}</h4>
        </div>
      </div>
    </div>
  );
};

export default CrecheDetail;
