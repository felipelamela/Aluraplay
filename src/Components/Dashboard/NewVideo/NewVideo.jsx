import React from "react";
import styles from "./NewVideo.module.css";
import { GlobalContextAPI } from "../../../GlobalContext/GlobalContext";
import { v4 as uuidv4 } from "uuid";
import SelectBox from "../../GobalComponents/SelectBox/SelectBox";
import TextArea from "../../GobalComponents/TextArea/TextArea";
import Input from "../../GobalComponents/Input/Input";

const NewVideo = () => {
  const { content, setContent } = React.useContext(GlobalContextAPI);

  const [title, setTitle] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [urlVideo, setUrlVideo] = React.useState("");
  const [urlImg, setUrlImg] = React.useState("");
  const [descripton, setDescription] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    /*
    setContent([
      ...content,
      {
        id: uuidv4(),
        titulo: title,
        categoria: category,
        urlVideo: urlVideo,
        urlThumbnail: urlImg,
        descricao: descripton,
      },
    ]);
    */
  }

  const inputList = [
    {
      name: "Título",
      type: "text",
      id: "title",
      value: title,
      setValue: setTitle,
    },
    {
      name: "URL Vídeo",
      type: "text",
      id: "urlVideo",
      value: urlVideo,
      setValue: setUrlVideo,
    },
    {
      name: "urlImg",
      type: "text",
      id: "urlImg",
      value: urlImg,
      setValue: setUrlImg,
    },
  ];

  return (
    <section className={styles.containerNewVideo}>
      <h2 className={styles.titleNewVideo}>Vídeo</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.containerFormNewVideo}>
          {inputList.map((input) => (
            <Input
              key={input.id}
              name={input.name}
              type={input.type}
              value={input.value}
              setValue={input.setValue}
            />
          ))}

          <SelectBox category={category} setCategory={setCategory} />

          <TextArea descripton={descripton} setDescription={setDescription} />
        </div>
        <button className={styles.buttonNewVideo}>Enviar</button>
      </form>
    </section>
  );
};

export default NewVideo;
