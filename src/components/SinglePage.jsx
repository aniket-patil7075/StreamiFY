import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/esm/Col';
import Row from "react-bootstrap/Row";
import { info } from "./ContextProvider";

function SinglePage() {
  const { movie } = useContext(info);
  return (
    <div>
      {movie.map((curMovie)=>{
        const {imdbID,Title,Poster}=curMovie;
        return(
          <Card
        style={{ width: "30rem" }}
        key={imdbID}
        className="bg-dark border border-white p-3"
      >
        <Row>
          <Col><Card.Body className="text-center">
            <Card.Title className="text-light">
              {Title}
            </Card.Title>
          </Card.Body>
          </Col>
          <Col>
            <Card.Img
              variant="top"
              src={Poster}
              style={{ height: "13rem" }}
            />
          </Col>
        </Row>
      </Card>
        )
      })}
      
    </div>
  )
}

export default SinglePage