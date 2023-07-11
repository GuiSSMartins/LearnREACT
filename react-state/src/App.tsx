import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Form, Form2 } from "./Form";
import { ErrorBoundary } from "./ErrorBoundary";
import Accordion from "./Accordion";
import Messenger from "./Messenger/Messenger";

function App() {
  return (
    <ErrorBoundary>
      <Form />
      <Form2 />
      <Accordion />
      <Messenger />
    </ErrorBoundary>
  );
}

export default App;
