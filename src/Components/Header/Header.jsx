import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.containerHeader}>
      <div className={styles.containerLinks}>
        <Link className="titleAlura" to="/">
          ALURA<span className="detailAlura">.PLAY</span>
        </Link>

        <div className={styles.containerModal}>
          <Link>Categorias</Link>
          <Link>svgNotificacao</Link>
          <Link to={"login"}>svgUsuario</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
