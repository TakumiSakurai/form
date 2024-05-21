import './Todo.css';
import React from 'react';
import { useState } from 'react';
import Edit from './Edit';
import { useNavigate } from 'react-router-dom';

export default function Todo() {
    const [todo, setTodo] = useState([]);

        const addList =(e)=>{
            e.preventDefault();
            setTodo([...todo, document.getElementById('todo-input').value]);
            console.log(todo);
            document.getElementById('todo-input').value = '';
        }

        const deleteButton = (e) => {
            const index = todo.indexOf(e.target.previousSibling.innerText);
            todo.splice(index, 1);
            setTodo([...todo]);
        }
        const Logout = () => {
            const navigate = useNavigate();
            navigate('/');
        }

    return(
    <>
    <div class="app-container">

        <h1>Todo List</h1>
        <form class="input-container" onSubmit={addList}>
            <input type="text" id="todo-input" placeholder="Enter a new task" />
            <button id="add-todo-button">Add Todo</button>
        </form>
        <ul id="todo-list">
            {todo.map((todo, index) => (
                <li key={index}>
                    <input type="checkbox" />
                    <span>{todo}</span>
                    <button class="delete-todo-button" onClick={deleteButton}>Delete</button>
                </li>
            ))}

        
        </ul>
        <button onClick={Logout}>ログアウト</button>
    </div>
    </>
    )
}