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

  const completeTodo = async id => {
    try {
      const todo = todos.filter(todo => todo.id === id)[0]
      todo.completed = true
      // 하단 주소 변수 들어갈때 ' 가 아니라 `임 주의!!
      await axios.put(`/api/todo/${id}/`, todo)
      getToDolist()
    } catch (err) {
      console.log(err)
    }
  }

  const editTodo = async todo => {
    try {
      // 하단 주소 변수 들어갈때 ' 가 아니라 `임 주의!!
      await axios.put(`/api/todo/${todo.id}/`, todo)
      getToDolist()
    } catch (err) {
      console.log(err)
    }
  }

  const deleteTodo = async id => {
    try {
      // 하단 주소 변수 들어갈때 ' 가 아니라 `임 주의!!
      await axios.delete(`/api/todo/${id}/`)
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

              {/* TODO 입력 */}
              <AddTodo addTodo={addTodo} />

              {/* TODO List 및 수정 삭제 */}
              {todos.map((todo, index) => (
                !todo.completed && <ToDo key={index} id={todo.id} title={todo.title} description={todo.description} completeTodo={completeTodo} editTodo={editTodo} deleteTodo={deleteTodo} />
              ))}

            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
