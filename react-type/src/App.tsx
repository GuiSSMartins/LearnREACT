import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function MyButton1() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    //alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

function MyButton2({ count, onClick } : { count: number; onClick: any}) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}


function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <AboutPage />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <p>
          Counters that update seperately
        </p>
        <MyButton1 />
        <MyButton1 />
        <Profile />
        <ShoppingList />
      </header>
      <div>
        <h1>Counters that update together</h1>
        <MyButton2 count={count} onClick={handleClick} />
        <MyButton2 count={count} onClick={handleClick} />
      </div>
    </div>
  );
}


export default App;
