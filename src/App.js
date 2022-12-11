
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <div className="app-body">
        <h4>Todo List</h4>
        <Form 
          setInputText={setInputText} 
          inputText={inputText} 
          todos={todos} 
          setTodos={setTodos} />
        <TodoList setTodos={setTodos} todos={todos}/>
      </div> 
    </div>
  );
}

export default App;
 