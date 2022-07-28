import React, { useState } from "react";

function CreateToDoList(props) {

    //To save the state of inputText when there is a change, initial state set to blank ""
    const [inputText, setInputText] = useState("");
    //Hold the value of the inputText from user
    function handleChange(event) {
        setInputText(event.target.value);
    }

    function handleClick(id) {
        props.onAdd(inputText);
        setInputText("")
    }

    return (
        <div className="form">
            <input onChange={handleChange} type="text" value={inputText} />
            <button onClick={handleClick}>
                <span>Add Item</span>
            </button>
        </div>
    )

}

export default CreateToDoList;