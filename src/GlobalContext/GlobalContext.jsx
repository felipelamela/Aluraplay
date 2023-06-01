import React, { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const GlobalContextAPI = createContext();

export const GlobalContextAPIProvider = ({ children }) => {
  const [content, setContent] = React.useState([
    {
      id: uuidv4(),
      titulo: `dadwdas`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduoha sdjsdnaljsduohasdj sdnaljsduo hasdjsdnaljsduoh asdjsdnaljsduoha djsdnaljsduohasdjsdnaljsduohasdj sdnalj sduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `DevOps`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Front-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Mobile`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Front-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Front-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `DevOps`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Mobile`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Front-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `DevOps`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Mobile`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `DevOps`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Mobile`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
  ]);
  const [USERLOG, setUSERLOG] = React.useState(false);

  const [ACCOUNT_USER, setACCOUNT_USER] = React.useState([
    {
      name: "Felipe",
      email: "dev@gmail.com",
      password: 123,
      listWatch: {},
    },
  ]);

  return (
    <GlobalContextAPI.Provider
      value={{
        content,
        setContent,
        USERLOG,
        setUSERLOG,
        ACCOUNT_USER,
        setACCOUNT_USER,
      }}
    >
      {children}
    </GlobalContextAPI.Provider>
  );
};

/*
const [content, setContent] = React.useState([
  {
    frontend: [
      {
        id: uuidv4(),
        titulo: `dadwdas`,
        categoria: `Back-End`,
        urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
        urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
        descricao: `jsdnaljsduoha sdjsdnaljsduohasdj sdnaljsduo hasdjsdnaljsduoh asdjsdnaljsduoha djsdnaljsduohasdjsdnaljsduohasdj sdnalj sduohasd`,
      },
      {
        id: uuidv4(),
        titulo: `dadwdas`,
        categoria: `Back-End`,
        urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
        urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
        descricao: `jsdnaljsduoha sdjsdnaljsduohasdj sdnaljsduo hasdjsdnaljsduoh asdjsdnaljsduoha djsdnaljsduohasdjsdnaljsduohasdj sdnalj sduohasd`,
      },
      {
        id: uuidv4(),
        titulo: `dadwdas`,
        categoria: `Back-End`,
        urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
        urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
        descricao: `jsdnaljsduoha sdjsdnaljsduohasdj sdnaljsduo hasdjsdnaljsduoh asdjsdnaljsduoha djsdnaljsduohasdjsdnaljsduohasdj sdnalj sduohasd`,
      },
    ],
    backend: [
      {
        id: uuidv4(),
        titulo: `Back-End`,
        categoria: `Back-End`,
        urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
        urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
        descricao: `jsdnaljsduohasd`,
      },
      {
        id: uuidv4(),
        titulo: `Back-End`,
        categoria: `Back-End`,
        urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
        urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
        descricao: `jsdnaljsduohasd`,
      },
      {
        id: uuidv4(),
        titulo: `Back-End`,
        categoria: `Back-End`,
        urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
        urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
        descricao: `jsdnaljsduohasd`,
      },
    ],
    DevOps: [
      {
        id: uuidv4(),
        titulo: `Back-End`,
        categoria: `DevOps`,
        urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
        urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
        descricao: `jsdnaljsduohasd`,
      },
      {
        id: uuidv4(),
        titulo: `Back-End`,
        categoria: `DevOps`,
        urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
        urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
        descricao: `jsdnaljsduohasd`,
      },
      {
        id: uuidv4(),
        titulo: `Back-End`,
        categoria: `DevOps`,
        urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
        urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
        descricao: `jsdnaljsduohasd`,
      },
    ],
    mobile: [
      {
        id: uuidv4(),
        titulo: `Back-End`,
        categoria: `Mobile`,
        urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
        urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
        descricao: `jsdnaljsduohasd`,
      },
      {
        id: uuidv4(),
        titulo: `Back-End`,
        categoria: `Mobile`,
        urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
        urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
        descricao: `jsdnaljsduohasd`,
      },
      {
        id: uuidv4(),
        titulo: `Back-End`,
        categoria: `Mobile`,
        urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
        urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
        descricao: `jsdnaljsduohasd`,
      },
    ],
  },
]);

*/
