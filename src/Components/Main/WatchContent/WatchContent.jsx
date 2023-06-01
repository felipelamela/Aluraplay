import React from "react";
import styles from "./WatchContent.module.css";
import { GlobalContextAPI } from "../../../GlobalContext/GlobalContext";

const WatchContent = () => {
  const { content } = React.useContext(GlobalContextAPI);

  function gerarValorUnico(numero) {
    return Math.floor(Math.random() * numero);
  }

  const conteudoGerado = content[gerarValorUnico(content.length)].content;

  console.log(conteudoGerado);

  return (
    <section className={styles.containerWatch}>
      <h2 className={styles.titleWatch}>Assistir</h2>
      <div className={styles.containerVideosWatch}>
        {conteudoGerado.map((cont) => (
          <img
            onClick={({ target }) => console.log(target.parentNode)}
            key={cont.id}
            className={styles.imgWatch}
            src={cont.urlThumbnail}
            alt=""
          />
        ))}
      </div>
    </section>
  );
};

export default WatchContent;
