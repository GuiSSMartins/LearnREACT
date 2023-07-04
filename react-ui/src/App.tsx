import React from 'react';
import './App.css';

import Gallery from './Gallery'; // default export
// import { Button } from './Button.js'; -> named export (example)
import { Profile } from './Profile';

function Bio() {
  return (
    <>
      <div className="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p className="summary">
        You can find my thoughts here.
        <br></br>
        <b>And <i>pictures</i></b> of scientists!
      </p>
    </>
  );
}

export default function App() {
  return (
    <>
      <Bio />
      <Gallery />
    </>
  );
}
