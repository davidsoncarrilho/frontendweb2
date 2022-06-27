import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Creche from "../../components/Creche";
import { API } from "../../service/service";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [creches, setCreches] = useState([]);

  const navigate = useNavigate();

  const getCreches = async () => {
    const {
      data: { creches },
    } = await API.get("/creches");

    setCreches(creches);
  };

  const handleCrecheClick = (creche) => {
    navigate(`/dashboard/creche/${creche.id}`);
  };

  useEffect(() => {
    getCreches();
  }, []);
  return (
    <div className={styles.home}>
      <h2>Lista de creches</h2>
      {creches.map((creche) => (
        <button
          onClick={() => handleCrecheClick(creche)}
          key={creche.id}
          className="creche-button"
        >
          <div className="creche-list">
            <div className="creche-card">
              <Creche creche={creche} />
            </div>{" "}
          </div>
        </button>
      ))}
    </div>
  );
};

export default Dashboard;
