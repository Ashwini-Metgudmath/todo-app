import React from 'react';
import FancyBorder from './FancyBorder'

 const Todo = ({ description, deadLine, completed, toggleItem, editMode, deleteItem, updateItem, editItem }) => {
    
    const editView = () => {
        return <input
                type="text"
                value={description}
                onChange={updateItem}
               />
    }

    const listView = () => {
        return (
            <span>
                {description} | {deadLine}
            </span>
        )
    }

      return(
        <FancyBorder color="black">
            <li className="list" style={{ textDecorationLine : completed ? 'line-through' : '' }} >
                { editMode ? editView() : listView() }
                <input  type="checkbox" 
                checked={completed}
                onChange={toggleItem}
                />
                <button name="delete" onClick={deleteItem}>Delete</button>
                <button name="edit" onClick={editItem}>{editMode ? 'Update' : 'Edit'}</button>
            </li>
          
        </FancyBorder>
      )
  }
  
   export default Todo;
  
  
