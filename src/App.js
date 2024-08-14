import logo from './logo.svg';
import './App.css';
import TodoListItem from './Components/TodoListItem/TodoListItem';
import { useState } from "react";

function App() {
  const [todos, setTodos] =useState([]);
  const [newInput, setInput] =useState('');
  const handleInputChange =(event)=>{
    setInput(event.target.value)
    console.log(newInput);
  }
  const addNewTodo =()=>{
    setTodos([...todos, { label: newInput, completed: false }])
    setInput('')
  }
  const makeTodoDone =(index)=>{
    const temporary =[...todos]
    temporary[index].completed =true
    setTodos(temporary)
  }
  const deleteTodo =(index)=>{
    const temp =[...todos]
    temp.splice (index,1)
    setTodos(temp)

  } 

  return (
    <div className='app-container'>
      <div className='todo-box'>
        <div>
          <input type="text" className='btn' onChange={handleInputChange} value={newInput} />
          <button className='btn1' onClick={addNewTodo}>Add</button>
        </div>
        <div>
          {todos.map((ele, index) => <TodoListItem label={ele.label} count={index} key={index} completed={ele.completed} makeTodoDone={makeTodoDone} deleteTodo={deleteTodo}/>)}

        </div>
      </div>
    </div>
  )
}

export default App;
