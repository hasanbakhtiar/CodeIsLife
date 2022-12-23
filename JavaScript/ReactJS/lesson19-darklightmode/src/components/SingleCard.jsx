import React from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const SingleCard = ({photo,title,desc,id}) => {
  return (
    <>
    <Col sm={12} md={4} >
    <Card mt={3}>
      <Card.Img height={300} variant="top" src={photo} />
      <Card.Body>
        <Card.Title>{title.substring(0,10)}</Card.Title>
        <Card.Text>
          {desc.substring(0,30)}...
        </Card.Text>
       <Link to={`/products/${id}`}> <Button variant="primary">Read More</Button></Link>
      </Card.Body>
    </Card>
    </Col>
    </>
  )
}

export default SingleCard