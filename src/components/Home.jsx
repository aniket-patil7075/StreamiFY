import React, { useContext, useEffect } from "react";
import Content from "./Content";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { info } from "./ContextProvider";
import Card from "react-bootstrap/Card";
import SinglePage from "./SinglePage";
import { Link } from 'react-router-dom';

function Home() {
  const { movie } = useContext(info);
  const {setQuery}=useContext(info)

  useEffect(() => {
    console.log(movie);
  }, []);
  return (
    <div>
      <Row>
        

        <Col className="bg-dark col-12 pt-4 col-sm-6 col-md-12 col-lg-12">
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
            <div className="row mt-5 mx-5" >
              {movie.map((curMovie) => {
                const {Title,Poster,imdbID,Type}=curMovie; 
                
                return (
                  <div
                    id="card"
                    className="col-12 col-sm-6 col-md-4 col-lg-2-4 mb-4"
                    key={imdbID}
                    style={{ flex: "0 0 20%" }}
                  >
                    <Link to={`SinglePage/${imdbID}`} style={{ textDecoration: "none" }}>
                    <Card
                      style={{ width: "100%" }}
                      id="card-main"
                      className="bg-dark border border-white p-3"
                    >
                      <Card.Body className="text-center ">
                        <Card.Title className="text-light" style={{height:'50px'}} >
                        {Title.length > 15 ? `${Title.slice(0, 20)}...` : Title}
                        </Card.Title>
                        <h1 className="text-light">{Type}</h1>
                      </Card.Body>
                      <Card.Img 
                      className="pt-2"
                      id="card-img"
                        variant="top"
                        src={Poster}
                        style={{ height: "13rem" }}
                      />
                    </Card>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
