import React from 'react';
import "./crearCampo.css";
import mapa from "../../images/vistasatelital.jpg"
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

export default function CrearCampo() {
  return (
    <div className='container d-flex justify-content-around'>
    <Card className='m-3 campo-container'>
      <Card.Body>
        <Card.Img variant="top" src={mapa}/>
      </Card.Body>
    </Card>
    <Card  className='m-3 campo-container'>
      <Card.Body>
            <Form>
            <Form.Group className="mb-3 d-flex" controlId="string">
              <Form.Label>Nombre del Campo:</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el nombre del campo" />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

          
        </Form>
   
      </Card.Body>
    </Card>
    </div>
  )
}
