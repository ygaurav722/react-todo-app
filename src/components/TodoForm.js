import React, { useState,useRef } from 'react'

function TodoForm(props) {
    const [input,setInput]=useState(props.edit ? props.edit :'');
    const inputRef=useRef('');
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
        {props.edit ?(
          <>
          <input type="text" placeholder=" Update note..." value={input} className="todo-input" onChange={handleInput} ref={inputRef}/>
        <button className="todo-button" >
        Update
        </button>
        </>
        ):(
          <><input type="text" placeholder=" Add a note..." value={input} className="todo-input" onChange={handleInput} ref={inputRef}/>
        <button className="todo-button" >
        Add Todo
        </button></>
        )}
      </form>
    </div>
  )
}

export default TodoForm
