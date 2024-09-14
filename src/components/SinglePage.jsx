import React from 'react'
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/esm/Col';
import Row from "react-bootstrap/Row";

function SinglePage() {
  return (
    <div>
        <Card
                      style={{ width: "30rem" }}
                      className="bg-dark border border-white p-3"
                    >
                      
                      
                    
                    <Row>
                        <Col><Card.Body className="text-center">
                        <Card.Title className="text-light">
                          Title
                        </Card.Title>
                      </Card.Body>
                        </Col>
                        <Col>
                        <Card.Img
                        variant="top"
                        src=""
                        style={{ height: "13rem" }}
                      />
                        </Col>
                    </Row>
                    </Card>
    </div>
  )
}

export default SinglePage