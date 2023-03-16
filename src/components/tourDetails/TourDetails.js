import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

function TourDetails(props) {
    return (
        <Modal show={props.showFlag} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title><b>{props.item.name}</b></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src={props.item.image} width='100%'></Image>
                <p><b>info:</b>{props.item.info}</p>
                <p><b>price:</b>{props.item.price}$</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default TourDetails;