import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Form from '../Form/Form';
import List from '../ToDoList/ToDoList';

// Styling
import '../App/App.css';
import Container from '@mui/material/Container';



function App () {
  const [todoList, setTodoList] = useState([]);

  const getTodoList = () => {
    axios.get('/todo').then((response) => {
      console.log(response.data);
      setTodoList(response.data);
    })
    .catch((error) => {
      console.error("Error in GET '/todo' inside getTodoList().", error);
      alert("Something Went Wrong");
    })
  }

  useEffect(() => {
    getTodoList();
  }, []);
  
  return (
    <Container maxWidth="lg" id="app">
      <Header/>
      <hr/>
      <Form getTodoList={getTodoList}/>
      <hr/>
      <List getTodoList={getTodoList} todoList={todoList}/>


    </Container>
  );

}
export default App