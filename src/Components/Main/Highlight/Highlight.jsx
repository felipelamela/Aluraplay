import React from "react";
import styles from "./Highlight.module.css";

/* a imagem vai vir do Banco de dados */

const Highlight = () => {
  return (
    <div className={styles.containerHighlight}>
      <img
        className={`${styles.imgHighlight}`}
        src="src\assets\IMG\maxresdefault.jpg"
        alt=""
      />
    </div>
  );
};

export default Highlight;
