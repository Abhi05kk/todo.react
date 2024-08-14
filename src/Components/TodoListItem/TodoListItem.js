import React from "react";
import './TodoListItem.css'

function TodoListItem({count,label,completed,makeTodoDone,deleteTodo}) {
    return(
        <div className="listitem">
           <h3 className={`${completed? 'done' : ""}`}> {count+1}. {label} </h3>
           <button onClick={()=>deleteTodo(count)}>Delete</button> 
          {!completed &&<button onClick={()=>makeTodoDone(count)}>Done</button>}
          </div>

    );
};

export default TodoListItem;