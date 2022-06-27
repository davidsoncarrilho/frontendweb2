import { useState, useEffect } from "react";
import styles from "./RegisterAddress.module.css";

const RegisterAddress = () => {
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [error, setError] = useState("");
  const [nomeCrianca, setNomeCrianca] = useState("");
  const [rg, setRg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // setError("");

    const userAddress = {
      nomeCrianca,
      rg,
      cep,
      rua,
      numero,
      bairro,
      cidade,
      estado,
    };
    if (userAddress.cep > 9) {
      setError("CEP inválido");
      return;
    }
    console.log(userAddress);
    // const res = await createUser(user);
    // console.log(res);
  };

  return (
    <div className={styles.register}>
      <form onSubmit={handleSubmit}>
        <h2>Dados da Criança</h2>
        <label htmlFor="nomeCrianca">
          <span>Nome Completo:</span>
          <input
            type="text"
            id="nomeCrianca"
            placeholder="Nome completo da criança"
            value={nomeCrianca}
            onChange={(e) => setNomeCrianca(e.target.value)}
            required
          />
        </label>
        <label htmlFor="rg">
          <span>RG:</span>
          <input
            type="text"
            id="rg"
            placeholder="Número do RG da criança"
            value={rg}
            onChange={(e) => setRg(e.target.value)}
            required
          />
        </label>

        <h2>Endereço: </h2>

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

export default RegisterAddress;
