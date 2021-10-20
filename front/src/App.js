import React, { useState, useEffect } from 'react';

import './App.css';
import AddTodo from './components/AddTodo'
import ToDo from './components/ToDo';
import { Container, Row, Col, Card } from 'react-bootstrap'
import axios from 'axios'

// package.json 으로 옮겼음
// axios.get('localhost:8000/api')
// axios.get('/api')

function App() {

  const [todos, setTodos] = useState([])

  const getToDolist = async () =>{

    try {
      const response = await axios.get('/api/todo/')
      const { data } = response
      setTodos(data)
    } catch (err) {

      console.log(err)

    }
  }

  useEffect(() => {
    getToDolist()
  }, [])


  const addTodo = async newTodo => {
    try {
      console.log(newTodo)
      await axios.post('/api/todo/', newTodo)
      getToDolist()
    } catch (err) {
      console.log(err)
    }

  }

  return (
    <div className='wrapper'>
      <Container>
        <Row className='justify-content-center pt-5'>
          <Col>
            <Card className='p-5'>
              <h1>오늘의 할 일!</h1>
              <AddTodo addTodo={addTodo} />
              {todos.map((todo, index) => (
                <ToDo id={todo.id} title={todo.title} description={todo.description} />
              ))}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
