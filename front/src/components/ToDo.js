import React from "react";
import { Row, Col, Form, Button, Modal } from 'react-bootstrap'

const ToDo = ({ id, title, description }) => {
    return (
        // HTML작성
        <>
            <Row className='border-bottom pt-3'>

                {/* md의 기능이 뭔지 모르겠음 */}
                <Col md={1}>
                    <Form>
                        <Form.Check type='checkbox'></Form.Check>
                    </Form>
                </Col>

                {/* 내용항목 */}
                <Col>
                    <h5>{title}</h5>
                    <h5>{description}</h5>
                </Col>

                {/* 버튼 */}
                <Col md={1}>
                    <Form>
                        <Button variant="info" className='my-2 btn-block' type="submit">수정</Button>
                    </Form>

                    <Form>
                        <Button variant="danger" className='my-2 btn-block' type="submit">삭제</Button>
                    </Form>
                </Col>
            </Row>
        </>
        
    )
}

export default ToDo