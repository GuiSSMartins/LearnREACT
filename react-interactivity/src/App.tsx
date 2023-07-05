import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Gallery from "./Gallery";
import { Toolbar, Toolbar2 } from "./ToolBar";
import { Form, Form2, Form3 } from "./Form";
import Counter from "./Counter";
import BucketList from "./BucketList";
import ButtonApp from "./Button"; // o conteúdo escrito no botão depende do input do utilizador
import Signup from "./Signup";
import LightSwitch from "./LightSwitch";
import ColorSwitch from "./ColorSwitch";
import {FeedbackForm, FeedbackForm2} from "./FeedbackForm";

// <ColorSwitch /> não está a funcionar !!!

export default function App() {
  return (
    <>
      <Toolbar2
        onPlayMovie={() => alert("Playing!")}
        onUploadImage={() => alert("Uploading!")}
      />
      <LightSwitch />
      <Gallery />
      <Form />
      <Counter />
      <Form2 />
      <BucketList />
      <Toolbar />
      <ButtonApp />
      <Signup />

      <div>
        <h2>
          Só para mostrar como uma Galeria não afeta a outra através do uso de
          States (useState)
        </h2>
        <Gallery />
        <Gallery />
        <h4>
          You rendered two Gallery components, so their state is stored
          separately. State is not tied to a particular function call or a place
          in the code, but it’s “local” to the specific place on the screen.
        </h4>
      </div>
      <Form3 />
      <FeedbackForm />
      Coisas separadas
      <FeedbackForm2 />
    </>
  );
}
