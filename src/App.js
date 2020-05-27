import React from 'react';
import './App.css';
import CTInput from "./component/CTInput";
import CTHeader from "./component/CTHeader";
import CTable from "./component/CTable";
import nextId from "react-id-generator";
import 'moment-timezone';
import 'moment/locale/km';
import 'bootstrap/dist/css/bootstrap.min.css';
import CTCard from "./component/CTCard";
import CTModal from "./component/CTModal";
import {findAllInRenderedTree} from "react-dom/test-utils";

// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
// let moment=Moment()
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            record: [],
            list: true,
            work: {
                id: "",
                name: "hello",
                age: "",
                gender: true,
                job: [
                    {id: "1", name: "Student", value: false},
                    {id: "2", name: "Teacher", value: false},
                    {id: "3", name: "Developer", value: false},
                ],
                create: "",
                update: "",
            },
            modal: false,
            update: "",
            date: ""
        };
    }

    cardClicked = () => {
        this.setState({list: false})
    }
    listClicked = () => {
        this.setState({list: true})
    }
    pageCounting = (record) => {
        return record.length % 3 === 0 ? Math.floor(record.length / 3) : Math.floor(record.length / 3) + 1
    }
    cardShowing = (bool) => {
        return bool ? "none" : "flex"
    }
    checkGender = (gender) => {
        return gender ? false : true
    }
    viewClick = (id) => {
        const index = this.state.record.findIndex((record) => {
            return record.id === id
        })
        const record = Object.assign({}, this.state.record[index])
        this.setState({work: record})
        this.setState({modal: true})
    }
    updateClick = (id) => {
        const index = this.state.record.findIndex((record) => {
            return record.id === id
        })
        let date = new Date()
        const record = Object.assign({}, this.state.record[index])
        document.getElementById("txtName").value = record.name
        document.getElementById("txtAge").value = record.age
        document.getElementById("rdbGenderF").checked = this.checkGender(record.gender)
        document.getElementById("rdbGenderM").checked = record.gender
        document.getElementById("chbStudent").checked = record.job[0].value
        document.getElementById("chbTeacher").checked = record.job[1].value
        document.getElementById("chbDev").checked = record.job[2].value
        this.setState({update: id})
        this.setState({date: date.toISOString()})
    }
    deleteClick = (id) => {
        const index = this.state.record.findIndex((record) => {
            return record.id === id
        })
        const record = Object.assign([], this.state.record)
        record.splice(index, 1)
        this.setState({record: record})
    }
    modalClose = () => {
        this.setState({modal: false})
    }
    submitClicked = () => {
        let regex1=/^[a-zA-Z ]+$/.test( document.getElementById("txtName").value);
        let regex2=/^[0-9]+$/.test( document.getElementById("txtAge").value);

       if(
           regex1 &&
           regex2
       ) {
            if (this.state.update !== "") {
                const index = this.state.record.findIndex((record) => {
                    return record.id === this.state.update
                })
                const records = Object.assign([], this.state.record)
                let date = new Date()
                records[index] = {
                    id: records[index].id,
                    name: document.getElementById("txtName").value,
                    age: document.getElementById("txtAge").value,
                    gender: document.getElementById("rdbGenderM").checked,
                    job: [
                        {id: "1", name: "Student", value: document.getElementById("chbStudent").checked},
                        {id: "2", name: "Teacher", value: document.getElementById("chbTeacher").checked},
                        {id: "3", name: "Developer", value: document.getElementById("chbDev").checked},
                    ],
                    create: records[index].create,
                    update: date.toISOString(),
                }
                this.setState({record: records})
                this.setState({update: ""})
                this.setState({date: ""})
                // alert(records[index].update+"   "+records[index].create)
            } else {
                const record = Object.assign([], this.state.record)
                const date = new Date();
                record.push({
                    id: nextId(),
                    name: document.getElementById("txtName").value,
                    age: document.getElementById("txtAge").value,
                    gender: document.getElementById("rdbGenderM").checked,
                    job: [
                        {id: "1", name: "Student", value: document.getElementById("chbStudent").checked},
                        {id: "2", name: "Teacher", value: document.getElementById("chbTeacher").checked},
                        {id: "3", name: "Developer", value: document.getElementById("chbDev").checked},
                    ],
                    create: date.toISOString(),
                    update: date.toISOString(),
                })
                this.setState({record: record})
            }
        }
       else{alert("Error Occurred")}
    }
    cardEvent = (id, event) => {
        let choose = event.target.value
        if (choose == 1) this.viewClick(id)
        else if (choose == 2) this.updateClick(id)
        else if (choose == 3) this.deleteClick(id)

    }

    render() {
        return (
            <div className="App container">
                <CTHeader/>
                <CTInput
                    record={this.state.work}
                    listEvent={this.listClicked.bind(this)}
                    cardEvent={this.cardClicked.bind(this)}
                    submitEvent={this.submitClicked.bind(this)}
                />
                <CTable display={this.state.list}
                        record={this.state.record}
                        pageCount={this.pageCounting(this.state.record)}
                        totalCount={this.props}
                        activePage={2}
                        update={this.updateClick}
                        view={this.viewClick}
                        delete={this.deleteClick}
                />
                <CTModal
                    show={this.state.modal}
                    record={this.state.work}
                    close={this.modalClose.bind(this)}
                />
                <div style={{paddingTop: "2vh", display: this.cardShowing(this.state.list)}}>
                    <CTCard record={this.state.record}
                            action={this.cardEvent}
                    />
                </div>
            </div>
        )
    }
}

export default App;
