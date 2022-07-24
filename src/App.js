import './App.css';
import { useState } from 'react';

function App() {

  //To save the state of inputText when there is a change, initial state set to blank ""
  const [inputText, setInputText] = useState("");
  //To hold the value of an array of items, initial state is set to empty [] 
  const [items, setItems] = useState([]);

  function handleChange(event) {
    //Hold the value of the inputText from user
    setInputText(event.target.value);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    })
    setInputText("");
  }

  return (

    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add Item</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => ( //mapping through each of the item and return a list of items being added
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
