import React from 'react'
import { PropTypes } from 'prop-types'
import Todo from './Todo'

const TodoList = ({ removeTodoHandlerClick, todos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo text={todo.text} todo={todo} key={todo.id} removeTodoHandlerClick={removeTodoHandlerClick} />
        ))}
      </ul>
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array,
  removeTodoHandlerClick: PropTypes.func,
}

export default TodoList
