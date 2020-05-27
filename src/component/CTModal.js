import React from "react";
import {Button, Modal} from "react-bootstrap";
import CTList from "./CTList";
let style=[{margin:0}]
function CTModal(props) {
    return(
        <Modal show={props.show} >
        <Modal.Dialog style={style[0]}>
            <Modal.Header closeButton>
                <Modal.Title>{props.record.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{props.record.age}</p>
                <p>{props.record.gender}</p>
                <CTList job={props.record.job}/>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.close}>Close</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </Modal>
    )
}
export default CTModal