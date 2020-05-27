import React from 'react';
import Table from "react-bootstrap/Table";
import Moment from "react-moment";
import {Col, InputGroup, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ReactPaginate from 'react-paginate';
import CTList from "./CTList";
let style =
    [
        {marginTop: "2vh"},
        {marginLeft:"30vw"}
    ]
let display = (bool) => {
    return bool ? "block" : "none"
}

let date=new Date(2018, 11, 24, 10, 33, 30, 0);
let test=date.toISOString()
let page=2;

class CTTable extends React.Component{
    constructor() {
        super();
        this.state={
            temp:[],
            active:"1"
        }

    }
    returnGender=(gender)=>{
        return gender?"Male":"Female"
    }
    handlePageClick = data => {
        let selected = data.selected;
        let a=Object.assign([],this.props.record.slice(3*selected,3*selected+3))
        this.setState({temp:a})
    };

    componentWillReceiveProps(props) {
        let selected = 0;
        let a=Object.assign([],props.record.slice(3*selected,3*selected+3))
        this.setState({temp:a})
    }

    render() {
    return (
        <div style={{display: display(this.props.display)}}>
            <Table striped bordered hover style={style[0]}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Jobs</th>
                    <th>Created @</th>
                    <th>Updated @</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.temp.map((record) => {
                        return (
                            <tr key={record.id}>
                                <td>{record.id}</td>
                                <td>{record.name}</td>
                                <td>{record.age}</td>
                                <td>{this.returnGender(record.gender)}</td>
                                <td>
                                    <CTList job={record.job}/>
                                </td>
                                <td><Moment fromNow>{record.create}</Moment></td>
                                <td><Moment fromNow>{record.update}</Moment></td>
                                <td>
                                    <InputGroup as={Col} >
                                    <InputGroup.Prepend>
                                        <Button onClick={this.props.view.bind(this,record.id)}
                                                variant="success">
                                            View
                                        </Button>
                                        <Button variant="warning"
                                                onClick={ this.props.update.bind(this,record.id)}>
                                            Update
                                        </Button>
                                    </InputGroup.Prepend>
                                    <InputGroup.Append>
                                        <Button variant="danger"
                                                onClick={this.props.delete.bind(this,record.id)}>
                                            Delete
                                        </Button>
                                    </InputGroup.Append>
                                    </InputGroup>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
            <div style={style[1]}>
            <ReactPaginate
                pageCount={this.props.pageCount}
                pageRangeDisplayed={3}
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                activePage={page}
                itemsCountPerPage={3}
                totalItemsCount={this.props.totalCount}
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                onPageChange={this.handlePageClick}
            />
            </div>
        </div>
    )
    }

}

export default CTTable