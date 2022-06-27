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
      <h2>Home</h2>
    </div>
  );
};

export default Home;
