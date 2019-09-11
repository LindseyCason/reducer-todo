import React from "react";
export const TodoListPage = (props) =>{
//this page is only to set up the structure of the elements
let cat = props.item;
console.log(cat)
    return(
       
        <div className="main_box">
            <h1>REDUCER TO DO LIST</h1>
            <h1>{cat.map(items =>(
                <h1>{items.item}</h1>
            ))}</h1>
            
        </div>
    )
}