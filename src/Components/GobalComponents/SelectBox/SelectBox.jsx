import React from "react";
import styles from "./SelectBox.module.css";
import { GlobalContextAPI } from "../../../GlobalContext/GlobalContext";

const SelectBox = ({ category, setCategory }) => {
  const { content } = React.useContext(GlobalContextAPI);
  return (
    <>
      <label htmlFor="category">Categoria</label>

      <select className={styles.selec} value={category} onChange={({target}) => setCategory(target.value)}>
        <option value="" disabled></option>
        {content.map((cont) => (
          <option key={cont.name} value={cont.name}>
            {cont.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectBox;
