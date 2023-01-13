import React from 'react'
import { PropTypes } from 'prop-types'
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons'

const Todo = ({ text, todo, removeTodoHandlerClick }) => {
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn">
        <CheckOutlined />
      </button>
      <button className="trash-btn" onClick={() => removeTodoHandlerClick(todo.id)}>
        <DeleteOutlined />
      </button>
    </div>
  )
}

Todo.propTypes = {
  text: PropTypes.string,
  todo: PropTypes.object,
  removeTodoHandlerClick: PropTypes.func,
}

export default Todo
