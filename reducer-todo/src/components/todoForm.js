import React, { useState, useReducer } from "react";
import { reducer, initialState } from "../reducers/reducerFile";

const TodoForm = () => {
  const [newItem, setNewItem] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  //^^these are imported from your reducer file.

  const handleChange = e => {
    setNewItem(e.target.value);
  };

console.log("state", state)


  return (
    <div>
     
        <input
        key={newItem.id}
          type="text"
          placeholder="Add ToDo"
          className="inputField"
          value={newItem}
          onChange={handleChange}
        />
        <button onClick={() =>{ dispatch({ type: "ADD_TODO", payload: newItem })}}>
          Click Me To Add
        </button>
       
      <h1>
        {state.todoList.map(todoItem => 
              <div> {todoItem.item} </div>
          )}
        </h1>
    </div>
  );
};

export default TodoForm;