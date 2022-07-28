import React from "react";

function ToDoListItems(props) {

    function deleteToDo(id) {
        props.onDelete(props.id);
    }

    return (
        <div className="todo-list">
            <li>{props.todoItem}</li>
            <button onClick={deleteToDo}>delete</button>
        </div>
    )
}

export default ToDoListItems;