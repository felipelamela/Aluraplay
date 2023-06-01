import React from "react";
import styles from "./NewVideo.module.css";

const NewVideo = () => {
  return (
    <section className={styles.containerNewVideo}>
      <h2 className={styles.titleNewVideo}>Vídeo</h2>
      <form>
        <div className={styles.containerFormNewVideo}>
          <label htmlFor="title">Título</label>
          <input type="text" name="" id="title" />

          <label htmlFor="category">Categoria</label>
          <input type="text" name="" id="category" />

          <label htmlFor="urlVideo">URL Vídeo</label>
          <input type="text" name="" id="urlVideo" />

          <label htmlFor="urlIMG">URL Imagem</label>
          <input type="text" name="" id="urlIMG" />

          <label htmlFor="Description">Descrição</label>
          <input type="text" name="" id="Description" />
        </div>
        <button className={styles.buttonNewVideo}>Enviar</button>
      </form>
    </section>
  );
};

export default NewVideo;
