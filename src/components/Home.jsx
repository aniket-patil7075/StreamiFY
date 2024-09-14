import React, { useContext } from 'react'
import Content from './Content'
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {info} from "./ContextProvider"
import Card from 'react-bootstrap/Card';

function Home() {
  const {movie}=useContext(info)
  console.log(movie)
  return (
    <div>
        <Row>
        <Col
          className="bg-dark col-2 py-4 px-5"
          style={{ borderRight: "2px solid white" }}
        >
          <h3 className="text-light fw-bold">StreamiFY</h3>
          <Button variant="danger" className="w-100 py-2 fw-bold mt-5">
            New Feeds
          </Button>
          <div className="pt-4">
            {/* <FontAwesomeIcon icon="fa-solid fa-fire" /> */}
            <a
              href=""
              className="text-light link-offset-2 link-underline link-underline-opacity-0 fw-bold "
            >
              Trending
            </a>
          </div>
          <div className="pt-4">
            <a
              href=""
              className="text-light link-offset-2 link-underline link-underline-opacity-0 fw-bold "
            >
              Popular
            </a>
          </div>
          <div className="pt-4">
            <a
              href="/Movies"
              className="text-light link-offset-2 link-underline link-underline-opacity-0 fw-bold "
            >
              Movies
            </a>
          </div>
          <div className="pt-4">
            <a
              href="/Tvshows"
              className="text-light link-offset-2 link-underline link-underline-opacity-0 fw-bold "
            >
              TV Shows
            </a>
          </div>
          <div className="pt-4">
            <a
              href="/Series"
              className="text-light link-offset-2 link-underline link-underline-opacity-0 fw-bold "
            >
              Series
            </a>
          </div>
          <hr style={{ borderTop: "2px solid white" }} />
          <Button variant="danger" className="w-100 py-2 fw-bold">
            Website info.
          </Button>
          <div className="pt-4">
            <a
              href="/About"
              className="text-light link-offset-2 link-underline link-underline-opacity-0 fw-bold "
            >
              About
            </a>
          </div>
          <div className="pt-4">
            <a
              href="/Contact"
              className="text-light link-offset-2 link-underline link-underline-opacity-0 fw-bold "
            >
              Contact
            </a>
          </div>
        </Col>

        <Col className="bg-dark col-10 pt-4 ">
          <div className="d-flex justify-content-center">
            <Form.Control
              type="text"
              placeholder="Search"
              className="w-50 bg-dark text-light me-3 ms-5"
            />
            <Button variant="outline-light">Search</Button>
          </div>
          <div className="my-5">
            <h1 className='text-light text-center'>Movies</h1>
            
            <div className='row mt-5 mx-5'>
              {movie.map((curMovie)=>{
                return(
                  <div className="col-12 col-sm-6 col-md-4 col-lg-2-4 mb-4" key={curMovie.Title} style={{ flex: '0 0 20%' }}>
  <Card style={{ width: '100%' }} className="bg-dark border border-white p-3">
    <Card.Body className="text-center">
      <Card.Title className="text-light">{curMovie.Title}</Card.Title>
    </Card.Body>
    <Card.Img variant="top" src={curMovie.Poster} style={{ height: '13rem' }} />
  </Card>
</div>

                )
              })}
            </div>
          </div>
        </Col>
      </Row>
        
    </div>
  )
}

export default Home