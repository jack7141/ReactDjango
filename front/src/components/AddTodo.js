import React, { useState } from "react";

// 하단의 form 태그를 사용하기 위해 import
import { Form, Button } from 'react-bootstrap'


const AddTodo = ({ addTodo }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const addTodoHandler = e => {
        e.preventDefault()
        addTodo({
            title,
            description,
            completed: false,
        })
    }

    return (
        // HTML작성
        <Form>
            {/* 타이틀 */}
            <Form.Group className="mb-3 pt-2" controlId="title">
                    <Form.Label className="mb-3">
                        제목
                    </Form.Label>
                <Form.Control type="text" placeholder="오늘 할 목록을 추가하세요" onChange={ e => setTitle(e.target.value) } />
            </Form.Group>

            {/* 내용 */}
            <Form.Group className="mb-3" controlId="description">
                    <Form.Label className="mb-3">
                        상세설명
                    </Form.Label>
                <Form.Control type="text" placeholder="상세설명을 추가하세요" onChange={ e => setDescription(e.target.value) } />
            </Form.Group>

            {/* 제출 */}
            <Button variant="primary" type="submit" onClick={addTodoHandler}>
                제출
            </Button>
        </Form>
    )
}

export default AddTodo