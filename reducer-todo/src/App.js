import React, { useReducer } from 'react';
import './App.css';
import { TodoListPage } from './components/todoListPage';
import { TodoForm } from './components/todoForm';

// const [newTitleText, setNewTitleText] = useState("");
// const [state, dispatch] = useReducer(titleReducer, initialState);


function App() {


  return (
    <div className="App">
      <TodoListPage />
      <TodoForm />
    </div>
  );
}

export default App;
