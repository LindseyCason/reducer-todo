import React, { useState, useReducer } from "react";
import { reducer, initialState } from "../reducers/reducerFile";
import { TodoListPage } from "./todoListPage";

export const TodoForm = (props) => {
  const [newItem, setNewItem] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  //^^these are imported from your reducer file.

  const handleChange = e => {
    setNewItem(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: newItem });
    // setNewItem("Add ToDo");
    
  };

  return (
    <div>
      <form className="formMain">
        <input
          type="text"
          placeholder="Add ToDo"
          className="inputField"
          value={newItem}
          onChange={handleChange}
        ></input>
        <button
          type="submit"
          onClick={handleSubmit}
        >
          Click Me To Add
        </button>
      </form>
      <TodoListPage
      item={state.todoList} />
    </div>
  );
};
