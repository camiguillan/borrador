import React from 'react';
import "./crearCampo.css";
import mapa from "../../images/vistasatelital.jpg"
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

export default function CrearCampo() {
  return (
    <div className='container d-flex '>
    <Card className='m-4 campo-container'>
      <Card.Body>
        <Card.Img variant="top" src={mapa}/>
      </Card.Body>
    </Card>
    <Card  className='m-4 campo-container'>
      <Card.Body>
       
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        </Form>
   
      </Card.Body>
    </Card>
    </div>
  )
}
