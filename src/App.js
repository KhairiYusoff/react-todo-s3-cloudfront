import './App.css';
import { useState } from 'react';
import CreateToDoList from './CreateToDoList';
import ToDoListItems from './ToDoListItems';

function App() {

  //To hold the value of an array of items, initial state is set to empty [] 
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    })
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });

  }

  return (

    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <CreateToDoList
        onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => ( //mapping through each of the item and return a list of items being added
            <ToDoListItems
              id={index}
              key={index}
              todoItem={todoItem}
              onDelete={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
