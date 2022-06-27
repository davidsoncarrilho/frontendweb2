import styles from "./RegisterUser.module.css";

import { useState, useEffect } from "react";

const RegisterUser = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password,
    };
    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais!");
      return;
    }
  };

  return (
    <div className={styles.register}>
      <h1>Cadastre-se</h1>
      <p></p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome do responsável:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>CPF:</span>
          <input
            type="Cpf"
            name="Cpf"
            required
            placeholder="CPF do responsável"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {<button className="btn">Avançar</button>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default RegisterUser;
