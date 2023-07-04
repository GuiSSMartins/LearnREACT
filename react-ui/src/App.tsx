import React from 'react';
import './App.css';

import Gallery from './Gallery'; // default export
// import { Button } from './Button.js'; -> named export (example)
import { Profile } from './Profile';


export default function App() {
  return (
    <>
      <Profile />
      <Gallery />
    </>
  );
}
