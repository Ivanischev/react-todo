import React from 'react'
import { useState } from 'react'
import { PropTypes } from 'prop-types'
import { PlusOutlined } from '@ant-design/icons'

const Form = ({ addTodoHandler }) => {
  const [inputText, setInputText] = useState('')

  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }

  const submitFormHandler = (e) => {
    e.preventDefault()
    addTodoHandler({ text: inputText, id: Math.random() * 1000 })
    setInputText('')
  }

  return (
    <form>
      <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler} />
      <button type="submit" className="todo-button" onClick={(e) => submitFormHandler(e)}>
        <PlusOutlined />
      </button>
      <p></p>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

Form.propTypes = {
  addTodoHandler: PropTypes.func,
}

export default Form
