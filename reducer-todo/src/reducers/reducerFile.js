//THIS PAGE IS DONE
export const initialState = {


    todoList: [{
        item: 'Learn about reducers',
        completed: false,
        id: 1
    },
      {
        item: 'Learn Redux',
        completed: false,
        id: 2
    },
    {
        item: 'Finish Lambda',
        completed: false,
        id: 3
    },
    {
        item: 'Get a Job',
        completed: false,
        id: 4
    }]
};

export const reducer = ( state, action ) =>{

    switch(action.type){
        case "ADD_TODO":
            return {
                ...state,
                todoList: [...state.todoList,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }] 
            }
        default:
            return state;
    }
}

//reducer is = the new value you return by running reducer with the state value variable and the action object
// let cat = reducer(initialState, { type: "ADD_TODO", payload: "Walk the Dog"}) //updated list with walk the dog added.
// console.log(cat)