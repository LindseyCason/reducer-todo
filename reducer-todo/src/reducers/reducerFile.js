//THIS PAGE IS DONE
export const initialState = {

    todoList: [{
        item: 'Learn about reducers',
        completed: false,
        id: 1
    }]
};


export const reducer = ( state, action ) =>{

    switch(action.type){
        case "ADD_TODO":
            console.log("actiontype", action.type)
            return {
                todoList: [...state.todoList,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }] 
            };
        case "TOGGLE_COMPLETED":
            return{
                todoList: state.todoList.map(todoItem =>{
                    if(action.payload === todoItem.id){
                    return {...todoItem, completed: !todoItem.completed};
                }else{return todoItem}})
            };
        case "CLEAR_COMPLETED":
            return{
                todoList: state.todoList.filter(todoItem => !todoItem.completed)
            }

        default:
            return state;
    }
}


// console.log(reducer(initialState, { type: "ADD_TODO", payload: "This is a new thing to do"}))
//reducer is = the new value you return by running reducer with the state value variable and the action object