import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([todos])

  useEffect(() => {
    filterHandler()
  }, [todos, status])

  const addTodoHandler = (todo) => {
    setTodos([...todos, todo])
  }

  const removeTodoHandlerClick = (todoId) => {
    setTodos(todos.filter((el) => el.id !== todoId))
  }

  const completeTodoHandlerClick = (todo) => {
    setTodos(
      filteredTodos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            done: !item.done,
          }
        }
        return item
      })
    )
  }

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.done === true))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.done === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }

  return (
    <div className="App">
      <div className="app-body">
        <h4>Todo List</h4>
        <Form addTodoHandler={addTodoHandler} setStatus={setStatus} />
        <TodoList
          todos={todos}
          removeTodoHandlerClick={removeTodoHandlerClick}
          completeTodoHandlerClick={completeTodoHandlerClick}
          filteredTodos={filteredTodos}
        />
      </div>
    </div>
  )
}

export default App
