import React from 'react';
import "./noCampo.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import campito from "../../images/campito.jpg"

export default function NoCampo() {
 return (
    <Card className="text-center card-no-campo ">
      <Card.Header className='card-header-no-campo'>
        <Card.Img variant="left" src={campito} className='campito'/>
      </Card.Header>
      <Card.Body>
        <Card.Title className='card-title-no-campo'>TODAVÍA NO TIENES NINGÚN CAMPO REGISTRADO</Card.Title>
        <Card.Text className='card-text-no-campo'>
          ¡Empieza ahora! Crea tu primer campo haciendo click abajo
        </Card.Text>
        <Button variant="primary">Crear Campo</Button>
      </Card.Body>
    </Card>
  );
}


