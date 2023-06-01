import React from "react";
import styles from "./Category.module.css";
import { GlobalContextAPI } from "../../../GlobalContext/GlobalContext";

const Category = () => {
  const { content } = React.useContext(GlobalContextAPI);

  return (
    <div className={styles.containerCategory}>
      {content.map((cont) => (
        <p key={cont.name}>{cont.name}</p>
      ))}
    </div>
  );
};

export default Category;
