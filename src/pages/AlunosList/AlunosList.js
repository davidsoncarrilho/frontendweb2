import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Creche from "../../components/Creche";
import { API } from "../../service/service";
import styles from "./AlunosList.module.css";

const CrecheDetail = () => {
  const { id } = useParams();
  const [creche, setCreche] = useState([]);

  const getCreche = async () => {
    const {
      data: { creche: crecheDetail },
    } = await API.get(`/creche/${id}`);

    setCreche(crecheDetail);

    console.log(crecheDetail);
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
        {creche.criancas.map((aluno) => {
          console.log("aluno: ", aluno);
          return (
            <div className={styles.card}>
              <h3>Aluno</h3>
              <h4>Nome: {aluno.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CrecheDetail;
