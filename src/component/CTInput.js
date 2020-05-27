import Form from "react-bootstrap/Form";
import React from "react";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, InputGroup} from "react-bootstrap";

// Style
let styleGroup =
    [
        {textAlign: "start"},
        {display: "inline"},
        {textAlign: "end", padding: 7},
        {padding: 0}
    ]


function CTInput(props) {
    return (
        <Form>
            <Row>
                <Form.Group style={styleGroup[0]} as={Col} controlId="formGroupEmail">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="input" id="txtName" placeholder="Input Name..."/>
                </Form.Group>
                <Form.Group as={Col} style={styleGroup[0]} >
                    <Form.Label as={Row}>
                        Gender:
                    </Form.Label>
                    <Form.Check
                        inline
                        type="radio"
                        label="Male"
                        name="formHorizontalRadios"
                        id="rdbGenderM"
                        checked={true}
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="Female"
                        name="formHorizontalRadios"
                        id="rdbGenderF"
                    />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group controlId="formGroupEmail" style={styleGroup[0]} as={Col}>
                    <Form.Label>Age:</Form.Label>
                    <Form.Control type="input" id="txtAge" placeholder="Input Age..." />
                </Form.Group>
                <Form.Group as={Col} style={styleGroup[0]}>
                    <Form.Label as={Row}>
                        Gender:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            inline
                            label="Student"
                            id="chbStudent"
                        />
                        <Form.Check
                            inline
                            label="Teacher"
                            id="chbTeacher"
                        />
                        <Form.Check
                            inline
                            label="Developer"
                            id="chbDev"
                        />
                    </Col>
                </Form.Group>
            </Row>
            <Row>
                <Button variant="dark" onClick={props.submitEvent}>Submit</Button>
            </Row>
            <Row>
                <Form.Label as={Col} style={styleGroup[2]}>
                    Display Data:
                </Form.Label>
                <InputGroup as={Col} style={styleGroup[3]}>
                    <InputGroup.Prepend>
                        <Button onClick={props.listEvent} variant="dark">List</Button>
                    </InputGroup.Prepend>
                    <InputGroup.Append >
                        <Button onClick={props.cardEvent} variant="dark">Card</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Row>
        </Form>
    )
}

export default CTInput