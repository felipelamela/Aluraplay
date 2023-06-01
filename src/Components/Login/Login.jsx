import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { GlobalContextAPI } from "../../GlobalContext/GlobalContext";

import Dashboard from "../Dashboard/Dashboard";
import Input from "../GobalComponents/Input/Input";

const Login = () => {
  const { ACCOUNT_USER } = React.useContext(GlobalContextAPI);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    console.log(ACCOUNT_USER);
    event.preventDefault();
  }

  const inputList = [
    {
      type: "email",
      value: email,
      setValue: setEmail,
      placeholder: "Email",
    },
    {
      type: "password",
      value: password,
      setValue: setPassword,
      placeholder: "Senha",
    },
  ];

  return (
    <section>
      <div className={styles.containerForm}>
        <Link className="titleAlura" to="/">
          Alura<span className="detailAlura">.Play</span>
        </Link>

        <form onSubmit={handleSubmit} className={styles.loginForm}>
         <div className={styles.inputContainer}>
         {inputList.map((input) => (
            <Input
              key={input.placeholder}
              className={styles.inputForm}
              type={input.type}
              value={input.value}
              setValue={input.setValue}
              placeholder={input.placeholder}
            />
          ))}
         </div>

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

/*
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


*/
