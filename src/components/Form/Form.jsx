import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './Form.css';

function Form(props) {
    const [priority, setPriority] = useState(3);
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [duedate, setDuedate] = useState("");


    const addTask = () => {
        let newTask = {
            priority: priority,
            title: title,
            description: description,
            duedate: duedate,
        }

        axios.post('/todo', newTask).then((response) => {
            setPriority(3);
            setTask('');
            setDuedate('');

            console.log('Response from server: ', response.data);
            props.getToDoList();
        })
            .catch((error) => {
                console.error("Error in POST '/todo' inside addTask().", error);
                alert("Something went wrong");
            })
    }

    return (
        <form onSubmit={addTask}>
            <label id='priority-label' htmlFor='priority'>Priority: </label>
            <select id='priority' value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value={3}>Low</option>
                <option value={2}>Medium</option>
                <option value={1}>High</option>
            </select>
            <label id='task-label' htmlFor='task'>Task: </label>
            <input id='task' type="text" maxLength="50" value={task} onChange={(e) => setTask(e.target.value)} />
            <label id='duedate-label' htmlFor='date'>Due Date: </label>
            <input id='duedate' type="date" value={duedate} onChange={(e) => setDuedate(e.target.value)} />
            <label id='description-label' htmlFor='description'>Description: </label>
            <textarea id='description' type='text' maxLength="500" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input id='duedate' type="date" value={duedate} onChange={(e) => setDuedate(e.target.value)} />

            <button id='add-task-btn'>Add Task</button>
        </form>
    )
}
export default Form;