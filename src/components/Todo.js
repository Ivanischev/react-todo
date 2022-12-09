import React from "react";
import {CheckOutlined, DeleteOutlined} from "@ant-design/icons"

const Todo = ({text}) => {
    return(
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="complete-btn"><CheckOutlined /></button>
            <button className="trash-btn"><DeleteOutlined /></button>
        </div>
    )
}

export default Todo;