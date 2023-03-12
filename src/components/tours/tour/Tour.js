import "./Tour.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const data = require("../../../data/db.json");

function Tour(props) {
  let res = data.filter((item) => {
    if (item.id === props.id) {
      return true;
    } else {
      return false;
    }
  })[0];

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title><b>{res.name}</b></Card.Title>
          <Button variant="primary">More Details</Button>
        </Card.Body>
        <Card.Img src={res.image} variant='top'></Card.Img>
        <hr />
      </Card>
    </>
  );
}

export default Tour;
