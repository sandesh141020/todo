import React from "react";
import "./todo.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
function Todo(props){
    const todo=props.todo
    const todolist=todo.map((item)=>{ 
        return (
            <div className="sg" key={item.key}>
                <p>
                    {item.value}
                    <span>
                        <FontAwesomeIcon className="Emoji" icon="trash" onClick={()=>props.deletetodo(item.key)}/>
                    </span>
                </p>
            </div>
        )
    })
    return(
        <div>{todolist}</div>
    )
    
}
export default Todo;
