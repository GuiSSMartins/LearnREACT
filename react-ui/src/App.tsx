import React from 'react';
import './App.css';

import Gallery from './Gallery'; // default export
// import { Button } from './Button.js'; -> named export (example)
import { Profile } from './Profile';
import Clock from './Clock';
import DrinkList from './Drink'; // default export
import PackingList from './Item'; // default export
import {List, RecipeList } from './data';
import Poem from './Poem';
import RecipeAlg from './Recipe';
import TeaGathering from './Cup';
import StoryTray from './StoryTray';

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





// <TeaGathering />
// <StoryTray />

export default function App() { // a partir de List, data.tsx diz como aceder aos valores das listas 
  return (
    <>
      <Bio />
      <Clock time={new Date()}/>
      <Gallery />
      <PackingList />
      <DrinkList />
      <List /> 
      <RecipeList />
      <Poem />
      <RecipeAlg />
    </>
  );
}
