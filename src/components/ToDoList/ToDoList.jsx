import React from 'react';
import Item from '../ToDoItem/ToDoItem.jsx';
import './ToDoList.css';

function List(props){
    return(
        <div id="task-list">
            {props.todoList.map((task) => (<Item key={task.id} getToDoList={props.getToDoList} task={task}/>))}
        </div>
    )
}
export default List;