import React from "react";
import styles from "./ContentManagement.module.css";
import { GlobalContextAPI } from "../../../GlobalContext/GlobalContext";

const ContentManagement = () => {
  const { content, setContent } = React.useContext(GlobalContextAPI);

  return (
    <div>
      {content.map((cont) => (
        <div key={cont.id} className={styles.containerItens}>
          <img src={cont.urlThumbnail} alt="" />
          <div className={styles.containerDescricaoContent}>
            <h2>{cont.titulo}</h2>
            <p>{cont.descricao}</p>
          </div>
          <div>
            <button>X</button>
            <button>Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentManagement;
/*

categoria
: 
"DevOps"
descricao
: 
"jsdnaljsduohasd"
id
: 
"aef59940-f10e-423b-a1ab-9456396286af"
titulo
: 
"Back-End"
urlThumbnail
: 
"https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
urlVideo
: 
"https://www.youtube.com/watch?v=dQw4w9WgXcQ"
<div>
img -> urlThumbnai

<div>
  titulo
  descricao
<\div>
<div>
button
button
</div>

</div>




*/
