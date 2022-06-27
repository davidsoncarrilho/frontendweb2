import styles from "./Login.module.css";
import { useState, useEffect } from "react";
import { API } from "../../service/service";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const { setUser } = useAuthValue();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const [email, password] = e.target;
      setError("");

      const user = {
        email: email.value,
        senha: password.value,
      };

      const {
        data: { token },
      } = await API.post("/login", user);

      setUser(user);

      API.defaults.headers.common["Authorization"] = token;
      localStorage.setItem("token", token);

      localStorage.setItem("user", JSON.stringify(user));

      if (token) {
        navigate("/dashboard");
      }
    } catch (error) {
      setError("usuario ou senha estão incorretos");
    }
  };

  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
      <p>Faça o login para poder utilizar o sistema</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>E-mail:</span>
          <input
            name="email"
            required
            placeholder="E-mail do usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        {!isLoading && <button className="btn">Entrar</button>}
        {isLoading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
