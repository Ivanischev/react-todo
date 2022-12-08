import React from 'react';
import {PlusOutlined} from "@ant-design/icons"

const Form = ({inputText, setInputText, todos, setTodos }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, id: Math.random() * 1000}
        ])
        setInputText("");
    }

    return (
        <form>
            <input value={inputText} type="text"  className='todo-input' onChange={inputTextHandler}/>
            <button type='submit' className='todo-button' onClick={submitHandler}>
                <PlusOutlined />
            </button>
            <p></p>
            <div className='select'>
                <select name="todos" className='filter-todo'>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;