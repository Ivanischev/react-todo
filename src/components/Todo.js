import React from 'react'
import { PropTypes } from 'prop-types'
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons'

const Todo = ({ text, todo, removeTodoHandlerClick, completeTodoHandlerClick }) => {
  return (
    <div className="todo">
      <li className={`todo-item ${todo.done ? 'completed' : ' '}`}>{text}</li>
      <div className="button-wrap">
        <button className="complete-btn" onClick={() => completeTodoHandlerClick(todo)}>
          <CheckOutlined />
        </button>
        <button className="trash-btn" onClick={() => removeTodoHandlerClick(todo.id)}>
          <DeleteOutlined />
        </button>
      </div>
    </div>
  )
}

Todo.propTypes = {
  text: PropTypes.string,
  todo: PropTypes.object,
  removeTodoHandlerClick: PropTypes.func,
}

export default Todo
