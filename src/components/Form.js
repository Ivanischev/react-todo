import React from 'react';
import {PlusOutlined} from "@ant-design/icons"

const Form = () => {
    return (
        <form>
            <h3>Form</h3>
            <input type="text" className='todo-input'/>
            <button className='todo-button' type='submit'>
                <PlusOutlined />
            </button>
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