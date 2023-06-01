import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { GlobalContextAPI } from "../../GlobalContext/GlobalContext";

import Dashboard from "../Dashboard/Dashboard";

const Login = () => {
  const { ACCOUNT_USER } = React.useContext(GlobalContextAPI);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    console.log(ACCOUNT_USER);
    event.preventDefault();
  }

  return (
    <section>
      <div className={styles.containerForm}>
        <h2 className="titleAlura">
          Alura<span className="detailAlura">.Play</span>
        </h2>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <input
            className={styles.inputForm}
            placeholder="Email"
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <input
            className={styles.inputForm}
            placeholder="Senha"
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <div className={styles.containerButton}>
            <Link className={styles.newPassword}>Esqueci a senha</Link>
            <button className={styles.buttonLogin}>Entrar</button>
          </div>
          <p className={styles.newHere}>
            Novo aqui?{" "}
            <Link className={styles.registerLink}>Crie a sua conta.</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
