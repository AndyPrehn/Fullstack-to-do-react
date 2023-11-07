import React from 'react';
import Item from '../ToDoItem/ToDoItem.jsx';
import './ToDoList.css';
import Button from '@mui/material/Button';
import axios from 'axios';

// function List(props){
//     return(
//         <div id="task-list">
//             {props.todoList.map((task) => (<Item key={task.id} getTodoList={props.getTodoList} task={task}/>))}
//         </div>
//     )
// }

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// function createData(
//   priority: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export function List(props) {

    const toggleComplete = (id) => {
        axios.put(`/todo/${id}`).then((response) => {
            console.log(`Task id:${id} marked complete`)
            props.getTodoList();
        })
            .catch((error) => {
                console.error("Error in PUT '/todo/:id' inside markComplete().", error);
                alert("Something went wrong");
            })
    }
    const removeTask = (id) => {
        axios.delete(`/todo/${id}`).then((response) => {
            console.log(`Task id:${id} deleted`)
            props.getTodoList();
        })
            .catch((error) => {
                console.error("Error in DELETE '/todo/:id' inside removeTask().", error);
                alert("Something went wrong");
            })
    }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell alighn="center"> Priority </TableCell>
            <TableCell align="center">Task</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Due Date</TableCell>
            <TableCell align="center">Complete</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.todoList.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.priority}
              </TableCell>
              {/* <TableCell align="center">{row.priority}</TableCell> */}
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.duedate}</TableCell>
              <TableCell align="center">
              {row.complete ? <Button> Done </Button> : <Button onClick={() => toggleComplete(row.id)} > Complete </Button>}</TableCell>
              <TableCell align="center"> <Button onClick={() => removeTask(row.id)} > Delete </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default List;