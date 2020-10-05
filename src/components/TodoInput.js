import React, { useState } from 'react'


function TodoInput({addTodo}){
    const [description, setDescription] = useState('');
    const [deadLine, setDeadLine] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit clicked");
        addTodo(description, deadLine);
        setDescription("");
        setDeadLine("");
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" 
            id="descriptionValue" 
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
            />
            <input type="date"
            id="deadLineValue"
            placeholder="Deadline for Todo item"
            value={deadLine}
            onChange={e => setDeadLine(e.target.value)}
            required
            />
            <button type="submit">Add todo</button>
        </form>
    )
}

export default TodoInput;