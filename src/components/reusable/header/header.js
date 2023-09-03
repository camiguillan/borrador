import Nav from 'react-bootstrap/Nav';
import "./header.css";
import Icon from '../../../assets/icons/icon';
import Navbar from 'react-bootstrap/Navbar';
import { Button, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

export default function Header({inicioSesion}) {
  const userID = 1
  return (
      <Navbar expand="lg" className="bg-body-tertiary  agro-nav">
      <Container className="agro-header">
      
        <Navbar.Brand href={`/home/${userID}`}> <Icon className="bi bi-flower1" color="#2a7d2e" fontSize="3rem" /> <h1>AGROIA</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">     
   <Nav variant="underline" defaultActiveKey={`/home/${userID}`}  activeKey={()=>{}}>
      <Nav.Item>
        <Nav.Link eventKey={`/home/${userID}`}> <Icon className="bi bi-house-door" fontSize='2vh'></Icon> Mis Campos</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link  eventKey={`/agregarCampo/${userID}`} > <Icon className="bi bi-plus-square" fontSize='2vh'></Icon> Agregar Campo</Nav.Link>
      </Nav.Item>
    </Nav>
        </Navbar.Collapse>

      
      <Nav.Item className=" justify-content-end">  
      {inicioSesion ? 
      (
        <div className='user-info-item'>

        <Icon className="bi bi-person-circle" fontSize='3vh'></Icon>
      <NavDropdown title="" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action2">
                <Icon className="bi bi-box-arrow-left" fontSize='2vh'></Icon>
                 Cerrar Sesion
                </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">
               <Icon className="bi bi-pencil-square" fontSize='2vh'></Icon>
                 Editar Perfil
              </NavDropdown.Item>
            </NavDropdown>
        </div>
            ) : (
              <div className='btn-container'>
              <Button>Iniciar Sesion</Button>
              <Button>Registrarse</Button>
              </div>

)}
    
      {/* <Icon className="bi bi-person-circle" fontSize='3vh'></Icon> */}
       
      </Nav.Item>
</Container>



    </Navbar>
  );
}
