import React, { useState, useReducer } from "react";
import { reducer, initialState } from "../reducers/reducerFile";
import './todoFormCSS.css';

const TodoForm = () => {
  const [newItem, setNewItem] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  //^^these are imported from your reducer file.

  const handleChange = e => {
    setNewItem(e.target.value);
  };

console.log("state", state)


  return (
    <div className="chickenfoot">
        
     <section className = "chickenfeet">
         <h1>What To Do Next?</h1>
        <input
        key={newItem.id}
          type="text"
          placeholder="Add To Do Items"
          className="inputField"
          value={newItem}
          onChange={handleChange}
        />
        <button onClick={() =>{ dispatch({ type: "ADD_TODO", payload: newItem }); setNewItem("")}}>
          ADD ITEM
        </button>
       
      <h1>
        {state.todoList.map(todoItem => 
              <div className= {todoItem.completed ? "completed" : ""} onClick ={() => dispatch({ type: "TOGGLE_COMPLETED", payload: todoItem.id})}> {todoItem.item} </div>
          )}
        </h1>

        <button onClick={() =>{ dispatch({ type: "CLEAR_COMPLETED" });
        setNewItem("")}}>
          CLEAR COMPLETED
        </button>
    </section>
    </div>
  );
};

export default TodoForm;