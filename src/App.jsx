import { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [isComposing, setIsComposing] = useState(false); // （日本語）変換中かを判定する

  function handleKeyDown(event) {
    if (event.key === 'Enter' && !isComposing) {
      setTodos([todo, ...todos]);
      setTodo('');
    }
  }
  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="input your task..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
      />
      <p>{todo}</p>
      {todos.map((e, i) => (
        <div key={i}>
          <input type="checkbox" id={i} />
          <label htmlFor={i}>{e}</label>
        </div>
      ))}
    </>
  );
}

export default App;
