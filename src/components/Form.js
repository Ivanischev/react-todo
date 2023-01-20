import React from 'react'
import { useState } from 'react'
import { PropTypes } from 'prop-types'
import { PlusOutlined } from '@ant-design/icons'

const Form = ({ addTodoHandler, setStatus }) => {
  const [inputText, setInputText] = useState('')

  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }

  const generateRandomId = () => {
    return Math.random() * 1000
  }

  const submitFormHandler = (e) => {
    e.preventDefault()
    addTodoHandler({ text: inputText, id: generateRandomId(), done: false })
    setInputText('')
  }

  const submitStatusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <form className="form">
      <div className="input-wrap">
        <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler} />
        <button type="submit" className="todo-button" onClick={(e) => submitFormHandler(e)}>
          <PlusOutlined />
        </button>
      </div>
      <div className="select">
        <select onChange={submitStatusHandler} name="todos" className="filter-todo">
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
