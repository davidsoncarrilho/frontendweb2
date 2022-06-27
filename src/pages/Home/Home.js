// CSS
import styles from "./Home.module.css";

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useNavigate, Link } from "react-router-dom";

// react
import { useState } from "react";
import Creche from "../../components/Creche";

// components

const Home = () => {
  const { documents: creches, loading } = useFetchDocuments("creches");

  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  console.log(loading);

  return (
    <div className={styles.home}>
      <h2>Lista de colégios</h2>
      <div className="creche-list">
        {loading && <p>Carregando...</p>}
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

export default Home;
