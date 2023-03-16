import "./Tour.css";
import TourDetails from "../../tourDetails/TourDetails";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

function Tour(props) {
  const [showFlag, setShowFlag] = useState(false);
  const [itemData, setItemData] = useState({});

  const modalRender = (param) => {
    setItemData(param);
    setShowFlag(true);
  };

  const handleClose = () => {
    setShowFlag(false);
  };

  return (
    <>
      
      <Card>
        <Card.Title>
          <b>{props.item.name}</b>
        </Card.Title>
        <Card.Img
          src={props.item.image}
          variant="top"
          style={{maxHeight:'220px'}}
        />
        <Card.Body>
          <Button
            variant="primary"
            onClick={() => {
              modalRender(props.item);
            }}
          >
            More Details
          </Button>
          <TourDetails
            showFlag={showFlag}
            handleClose={handleClose}
            item={itemData}
          />
        </Card.Body>
      </Card>
    </>
  );
}

export default Tour;
