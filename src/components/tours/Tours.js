import Tour from "./tour/Tour";
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import  Col  from "react-bootstrap/Col";
const data = require("../../data/db.json");
function Tours() {
  return (
    <Row xs={1} md={4} className="g-4">
      {data.map((item) => {
        return (
          <Col>
          <Card style={{display:'flex',width:'100%'}}>
          <Tour key={item.id} item={item}/>
          </Card>
          </Col>
        );
      })}
    </Row>
    
  );
}
export default Tours;
