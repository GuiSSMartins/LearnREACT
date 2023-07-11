import { useState, useContext } from 'react';

export default function AddTask({ onAddTask }: any) {
  const [text, setText] = useState('');
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
      }}>Add</button>
    </>
  );
}

let nextId = 3;
