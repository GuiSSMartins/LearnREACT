import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Gallery from "./Gallery";
import ToolBar from "./ToolBar";
import {Form, Form2} from "./Form";
import Counter from "./Counter";
import BucketList from "./BucketList";
import Button from "./Button"; // o conteúdo escrito no botão depende do input do utilizador

export default function App() {
  return (
    <>
      <ToolBar
        onPlayMovie={() => alert("Playing!")}
        onUploadImage={() => alert("Uploading!")}
      />
      <Gallery />
      <Form />
      <Counter />
      <Form2 />
      <BucketList />
    </>
  );
}
