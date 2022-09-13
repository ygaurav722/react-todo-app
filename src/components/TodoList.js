import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos,setTodos]=useState([]);
    
    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos=[todo, ...todos]
        setTodos(newTodos);
        // console.log(...todos);

    };
    const completeTodo=id =>{
        let updatedtodo=todos.map((todo)=>{
            if(todo.id === id){
                todo.isComplete= !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedtodo);
    };

    const deleteTodo=id=>{
        const remtodos=[...todos].filter(todo=> todo.id !== id);

        setTodos(remtodos);
    };

    const updateTodo=(todoId,newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }

        setTodos(prev => prev.map(item=> (item.id === todoId ? newValue : item)) );
    }

  return (
    <div>
        <h1>What is in your Todo List ?</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
      
    </div>
  )
}

export default TodoList
