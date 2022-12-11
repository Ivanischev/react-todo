import React from "react";
import {CheckOutlined, DeleteOutlined} from "@ant-design/icons"

const Todo = ({text, todo, setTodos, todos }) => {


    const RemoveTodoHandlerClick = () => {
        setTodos(todos.filter((el) => el.id !== todo.id ))
    }

    return(
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="complete-btn"><CheckOutlined /></button>
            <button className="trash-btn" onClick={RemoveTodoHandlerClick}><DeleteOutlined /></button>
        </div>
    )
}

export default Todo;