import React from "react";
import styles from "./TextArea.module.css";

const TextArea = ({ descripton, setDescription }) => {
  return (
    <>
      <label htmlFor="description">Descrição</label>
      <textarea
        className={styles.text}
        rows="8"
        cols="30"
        id="description"
        style={{ resize: "none" }}
        value={descripton}
        onChange={({ target }) => setDescription(target.value)}
      ></textarea>
    </>
  );
};

export default TextArea;
