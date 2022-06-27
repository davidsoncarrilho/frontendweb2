import styles from "./CreateCreche.module.css";

import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

const CreateCreche = () => {
  const [nomeCreche, setNomeCreche] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [error, setError] = useState("");

  const { createCreche, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.creche}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nomeCreche">
          <span>Nome da escolinha:</span>
          <input
            type="text"
            id="nomeCreche"
            placeholder="Nome da creche"
            value={nomeCreche}
            onChange={(e) => setNomeCreche(e.target.value)}
            required
          />
        </label>

        <label htmlFor="rua">
          <span>Rua</span>
          <input
            type="text"
            id="rua"
            placeholder="Nome da Rua"
            value={rua}
            onChange={(e) => setRua(e.target.value)}
            required
          />
        </label>

        <label htmlFor="numero">
          <span>Número</span>
          <input
            type="number"
            id="numero"
            required
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            placeholder="Número da casa"
          />
        </label>

        <label htmlFor="cep">
          <span>CEP:</span>
          <input
            type="text"
            id="cep"
            placeholder="85660000"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            required
          />
        </label>

        <label htmlFor="complemento">
          <span>Complemento</span>
          <input
            type="text"
            id="complemento"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
            placeholder="Complemento (opcional)"
          />
        </label>

        <label htmlFor="bairro">
          <span>Bairro</span>
          <input
            type="text"
            id="bairro"
            placeholder="Nome do bairro"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            required
          />
        </label>

        <label htmlFor="cidade">
          <span>Cidade</span>
          <input
            type="text"
            id="cidade"
            value={cidade}
            placeholder="Nome da cidade"
            onChange={(e) => setCidade(e.target.value)}
            required
          />
        </label>

        <label htmlFor="estado">
          <span>Estado</span>
          <input
            type="text"
            id="estado"
            value={estado}
            placeholder="UF do estado"
            onChange={(e) => setEstado(e.target.value)}
            required
          />
        </label>
        <button className="btn">Cadastrar</button>
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default CreateCreche;
