import React from 'react';
import './App.css';
import TodoForm from './components/todoForm';

// const [newTitleText, setNewTitleText] = useState("");
// const [state, dispatch] = useReducer(titleReducer, initialState);


function App() {


  return (
    <div className="App">
      <TodoForm />
    </div>
  );
}

export default App;
