import React from "react";
import styles from "./Dashboard.module.css";
import ContentManagement from "./ContentManagement/ContentManagement";
import NewVideo from "./NewVideo/NewVideo";
import NewCategory from "./NewCategory/NewCategory";
import Header from "../Header/Header";

const categoryDash = {
  newvideo: <NewVideo />,
  category: <NewCategory />,
  contentmanagement: <ContentManagement />,
};

const Dashboard = () => {
  const [screen, setScreen] = React.useState(null);

  function screenMove({ target }) {
    const button = target.innerText;
    setScreen(button);
    console.log(button);
  }

  return (
    <>
      <Header />
      <section className={styles.containerDashboard}>
        <h2 className={styles.titleDashboard}>Área de criação</h2>
        <div className={styles.containerContentDashboard}>
          <ul className={styles.containerCategoryDashboard}>
            <li>
              <button onClick={screenMove}>Video</button>
            </li>
            <li>
              <button onClick={screenMove}>Categoria</button>
            </li>
            <li>
              <button onClick={screenMove}>Conteúdo</button>
            </li>
          </ul>
          <div className={styles.containerPagesDashboard}>
            {screen === "Conteúdo" && <ContentManagement />}
            {screen === "Categoria" && <NewCategory />}
            {screen === "Video" && <NewVideo />}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
