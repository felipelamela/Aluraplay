import React from "react";
import styles from "./UserList.module.css";

const UserList = () => {
  return (
    <section className={styles.containerWatch}>
      <h2 className={styles.titleWatch}>Assistir</h2>
      <div className={styles.containerVideosWatch}>
        <img
          className={styles.imgWatch}
          src="src\assets\IMG\maxresdefault.jpg"
          alt=""
        />
        <img
          className={styles.imgWatch}
          src="src\assets\IMG\maxresdefault.jpg"
          alt=""
        />
        <img
          className={styles.imgWatch}
          src="src\assets\IMG\maxresdefault.jpg"
          alt=""
        />
        <img
          className={styles.imgWatch}
          src="src\assets\IMG\maxresdefault.jpg"
          alt=""
        />
      </div>
    </section>
  );
};

export default UserList;
