import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (todo) => {
    setTodos([...todos, todo])
  }

  const removeTodoHandlerClick = (todoId) => {
    setTodos(todos.filter((el) => el.id !== todoId))
  }

  return (
    <div className="App">
      <div className="app-body">
        <h4>Todo List</h4>
        <Form addTodoHandler={addTodoHandler} />
        <TodoList todos={todos} removeTodoHandlerClick={removeTodoHandlerClick} />
      </div>
    </div>
  )
}

export default App
