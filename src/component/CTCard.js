import React from "react";
import Card from "react-bootstrap/Card";
import {Form} from "react-bootstrap";
import Moment from "react-moment";
import CTList from "./CTList";
let style=[
    {color:"blue",padding: 5},
    {padding:0,textAlign:"start"},
    {padding: 5},
    {padding: 5,margin:5},
    {padding: 5,margin:5},
]
function CTCard(props) {
    return (
        props.record.map((record) => {
            return (
                <Card key={record.id} style={{width: '13rem',margin:"3px"}}>
                    <Card.Body style={style[1]}>
                        <Form.Control onChange={props.action.bind(this,record.id)} style={style[0]} as="select" custom>
                            <option key={1} value={1}>View</option>
                            <option key={2} value={2}>Update</option>
                            <option key={3} value={3}>Delete</option>
                        </Form.Control>
                        <Card.Title style={style[3]}>{record.name}</Card.Title>
                        <Card.Subtitle style={style[2]}>Jobs</Card.Subtitle>
                        <CTList job={record.job}/>
                    </Card.Body>
                    <Card.Footer>
                        <Moment fromNow style={style[4]}>{props.create}</Moment>
                    </Card.Footer>
                </Card>
            )
        })
    )
}

export default CTCard