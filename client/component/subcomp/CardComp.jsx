import react from "react";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function CardComp(props) {
  return (
    <div className="col-4 p-4" >
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.imgsrc} />
        <Card.Body>
          <Card.Title>{props.ctitle}</Card.Title>
          <Card.Text>
            {props.content}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}