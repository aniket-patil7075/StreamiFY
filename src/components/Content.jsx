import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Cardss from './Cardss';

function Content() {
  return (
    <div className=''>
        <Row>
            <Col className='bg-dark col-2 py-4 px-5' style={{ borderRight: '2px solid white' }}>
            <Button variant="danger" className='w-100 py-2 fw-bold'>New Feeds</Button>
            <div className='pt-4'>
            {/* <FontAwesomeIcon icon="fa-solid fa-fire" /> */}
            <a href="" className='text-light link-offset-2 link-underline link-underline-opacity-0 fw-bold ' >Trending</a>
            </div>
            <div className='pt-4'>
            <a href="" className='text-light link-offset-2 link-underline link-underline-opacity-0 fw-bold ' >Popular</a>
            </div>
            <div className='pt-4'>
            <a href="" className='text-light link-offset-2 link-underline link-underline-opacity-0 fw-bold ' >Movies</a>
            </div>
            <div className='pt-4'>
            <a href="" className='text-light link-offset-2 link-underline link-underline-opacity-0 fw-bold ' >TV Shows</a>
            </div>
            <div className='pt-4'>
            <a href="" className='text-light link-offset-2 link-underline link-underline-opacity-0 fw-bold ' >Series</a>
            </div>
            <hr style={{ borderTop: '2px solid white' }} />
            <Button variant="danger" className='w-100 py-2 fw-bold'>Website info.</Button>
            <div className='pt-4'>
            <a href="" className='text-light link-offset-2 link-underline link-underline-opacity-0 fw-bold ' >About</a>
            </div>
            <div className='pt-4'>
            <a href="" className='text-light link-offset-2 link-underline link-underline-opacity-0 fw-bold ' >Contact</a>
            </div>
            </Col>


            <Col className='bg-dark col-10 pt-4 '>
            <div className='d-flex justify-content-center'>
            <Form.Control type="text" placeholder="Search" className='w-50 bg-dark text-light me-3 ms-5' />        
        <Button variant="outline-light">Search</Button>
              </div>          
              <div className='my-5 d-flex justify-content-around'>
                <Cardss/>
              </div>
            </Col>
        </Row>
    </div>
  )
}

export default Content