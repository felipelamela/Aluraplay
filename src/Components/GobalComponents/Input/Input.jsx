import React from "react";
import styles from "./Input.module.css";

const Input = ({ name, type, value, setValue, id, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
};

export default Input;
