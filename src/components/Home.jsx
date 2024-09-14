import React, { useContext, useEffect } from "react";
import Content from "./Content";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { info } from "./ContextProvider";
import Card from "react-bootstrap/Card";
import SinglePage from "./SinglePage";
// import './App.css'

function Home() {
  const { movie } = useContext(info);
  const {setQuery}=useContext(info)

  useEffect(() => {
    console.log(movie);
  }, []);
  return (
    <div>
      <Row>
        <Col
          className=" bg-dark col-2 py-4 px-5"
          style={{ borderRight: "2px solid white" }}
        >
          <h3 className="text-light fw-bold">StreamiFY</h3>
          <Button variant="danger" className="w-100 py-2 fw-bold mt-5">
            New Feeds
          </Button>
          <div className=" pt-4 " style={{height:"50px"}}>
            {/* <FontAwesomeIcon icon="fa-solid fa-fire" /> */}
            
            <a
              href=""
              className="link text-light link-offset-2 link-underline link-underline-opacity-0 fw-bold"
            >
              Trending
            </a>
          </div>
          <div className="pt-4" style={{height:"50px"}}>
            <a
              href=""
              className="link text-light link-offset-2 link-underline link-underline-opacity-0 fw-bold "
            >
              Popular
            </a>
          </div>
          <div className="pt-4" style={{height:"50px"}}>
            <a
              href="/Movies"
              className="link text-light link-offset-2 link-underline link-underline-opacity-0 fw-bold "
            >
              Movies
            </a>
          </div>
          <div className="pt-4" style={{height:"50px"}}>
            <a
              href="/Tvshows"
              className="link text-light link-offset-2 link-underline link-underline-opacity-0 fw-bold "
            >
              TV Shows
            </a>
          </div>
          <div className="pt-4" style={{height:"50px"}}>
            <a
              href="/Series"
              className="link text-light link-offset-2 link-underline link-underline-opacity-0 fw-bold "
            >
              Series
            </a>
          </div>
          <hr style={{ borderTop: "2px solid white" }} />
          <Button variant="danger" className="w-100 py-2 fw-bold">
            Website info.
          </Button>
          <div className="pt-4" style={{height:"50px"}}>
            <a
              href="/About"
              className="link text-light link-offset-2 link-underline link-underline-opacity-0 fw-bold "
            >
              About
            </a>
          </div>
          <div className="pt-4" style={{height:"50px"}}>
            <a
              href="/Contact"
              className="link text-light link-offset-2 link-underline link-underline-opacity-0 fw-bold "
            >
              Contact
            </a>
          </div>
        </Col>

        <Col className="bg-dark col-10 pt-4 col-sm-6 col-md-10 col-lg-10">
          <div className="d-flex justify-content-center">
            <Form.Control
              type="text"
              placeholder="Search"
              className="w-50 bg-dark text-light me-3 ms-5"
              onChange={(e)=>setQuery(e.target.value)}
            />
            <Button variant="outline-light" onClick={(e)=>e.preventDefault()} >Search</Button>
          </div>
          <div className="my-5">
            <h1 className="text-light text-center">Movies</h1>

            <div className="row mt-5 mx-5" >
              {movie.map((curMovie) => {
                const {Title,Poster,imdbID}=curMovie; 
                
                return (
                  <div
                    id="card"
                    className="col-12 col-sm-6 col-md-4 col-lg-2-4 mb-4"
                    key={imdbID}
                    style={{ flex: "0 0 20%" }}
                    
                  >
                    <Card
                      style={{ width: "100%" }}
                      id="card-main"
                      className="bg-dark border border-white p-3"
                    >
                      <Card.Body className="text-center">
                        <Card.Title className="text-light">
                          {Title}
                        </Card.Title>
                      </Card.Body>
                      <Card.Img
                      id="card-img"
                        variant="top"
                        src={Poster}
                        style={{ height: "13rem" }}
                      />
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </Col>
      </Row>
      {/* <SinglePage/> */}
    </div>
  );
}

export default Home;
