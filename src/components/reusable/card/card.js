// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import grass from "../../../images/grass3.jpg"
import "./card.css"

function CardEx() {
  return (
    <div className='card-container' onClick={() => console.log("hola")}>
    <Card style={{width: ""}} >
      <Card.Img variant="top" src={grass} />
      <Card.Body  >
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
         <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
    </Card>
    </div>
  );
}

export default CardEx;