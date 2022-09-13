import React, { useState,useEffect,useRef } from 'react'

function TodoForm(props) {
    const [input,setInput]=useState('');

    const handleInput=(e)=>{
        setInput(e.target.value);
    };

    const handleSubmit=e=>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()*1000),
            text: input
        });

        setInput('');

    };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder=" Add a note..." value={input} className="todo-input" onChange={handleInput}/>
        <button className="todo-button" >
        Add Todo
        </button>
      </form>
    </div>
  )
}

export default TodoForm
