import React, { useState, useEffect } from 'react'
import uuid from 'uuid';
import Todo from './Todo'
import TodoInput from './TodoInput'

function TodoList(){
    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            const todoList = await fetch("https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw")
            .then(res => res.json());
            
            console.log(todoList);
            setItems(todoList);
        })();
    }, [])

    const addItem = (text, date) => {
        setItems([
            ...items,
            {
                id : uuid(),
                description : text,
                deadline : date,
                completed : false,
                editMode : false,
            }
        ])
    }

    const handleDelete = (id) => {
        setItems(prev =>{
            const updatedTodos = prev.filter(todo => todo.id !== id);
            return updatedTodos;
        })
    }

    const handleEdit =(id) => {
        setItems(prev => {
        const updatedTodos = prev.map(todo => {
            if(todo.id === id)
            return { ...todo, editMode : !todo.editMode}
            return todo;
        })
        return updatedTodos;
        })
    }

    const handleUpdate = (id, value) => {
        setItems(prev =>{
            const updatedTodos = prev.map(todo => {
                if(todo.id === id)
                return {...todo, description : value }
                return todo;
            })
            return updatedTodos;
        })
    }

    const handleChecked = (id) => {
        console.log("checked" + id);
        setItems(prev => {
            const updatedTodos = prev.map(todo => {
                if(todo.id === id)
                return { ...todo, completed : !todo.completed};
                return todo;
            })
            return updatedTodos;
        })
    }

    return(
        <div>
            <TodoInput addTodo={addItem} />
            { items !== null ? <ul> {items.length === 0 ? 'No todo item' :
            items.map(item =>
                (
                    <Todo key={item.id} description={item.description}
                    deadLine={item.deadline}
                    completed={item.completed}
                    editMode={item.editMode}
                    toggleItem={() => handleChecked(item.id)}
                    deleteItem={() => handleDelete(item.id) }
                    editItem={() => handleEdit(item.id)}
                    updateItem={(e) => handleUpdate(item.id, e.target.value)}
                    />
                ))} 
            </ul> :
            <h3>Loading..</h3>
        }
        </div>
    )
}

export default TodoList;