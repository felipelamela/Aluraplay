import React, { useContext } from "react";
import { GlobalContextAPI } from "../../GlobalContext/GlobalContext";
import Highlight from "./Highlight/Highlight";
import WatchContent from "./WatchContent/WatchContent";
import styles from "./Main.module.css";
import Category from "./Category/Category";
import UserList from "./UserList/UserList";
import Header from "../Header/Header";

const Main = () => {

  return (
    <>
      <Header />
      <div>
        <Highlight />
        <div className={styles.containerMainContent}>
          <div className={styles.contentLeftMain}>
            <WatchContent />
            <UserList />
          </div>
          <Category />
        </div>
      </div>
    </>
  );
};

export default Main;
