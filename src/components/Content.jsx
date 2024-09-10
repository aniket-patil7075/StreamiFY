import React from 'react'
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Content() {
  return (
    <div className=''>
        <Row>
            <Col className='bg-dark col-2 pt-4 px-5'>
            <Button variant="outline-danger">Search</Button>
            </Col>
            <Col className='bg-secondary col-10 pt-4 '>
            <Button variant="outline-danger">Search</Button>
            </Col>
        </Row>
    </div>
  )
}

export default Content