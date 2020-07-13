import React from "react";
import style from './patientsearch.module.css'
import axios from "axios";
import {Button, Modal, ListGroup} from "react-bootstrap";

class PatientsearchComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            show: false,
            patients: [],
            searchitem: '',
            searchresults: []
        }
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    onChangeSearchInput = (e) => {
        this.setState({
            searchitem: e.target.value
        })
    }

    handleSearchClick = () => {

        let obj = this.state.patients.find(o => o.firstname === this.state.searchitem);

        if (obj === undefined) {
            alert("no matching results")
        } else {
            this.setState({
                show: true,
                searchresults: obj
            })
        }

    }

    componentDidMount() {
        axios.get('http://localhost:4000/HPSvthree/admin/getpatients')
            .then(response => {
                this.setState({
                    patients: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div>

                <div className={style.containernew}>

                    <input type="text" placeholder="Search..." onChange={this.onChangeSearchInput}/>
                    <div className={style.search} onClick={this.handleSearchClick}></div>

                </div>


                <Modal show={this.state.show} onHide={this.handleClose}>

                    <Modal.Header closeButton className={style.modalheader}>
                        <Modal.Title>Search Results</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <ListGroup>
                            <ListGroup.Item>First Name : {this.state.searchresults.firstname}</ListGroup.Item>
                            <ListGroup.Item>Last Name : {this.state.searchresults.lastname}</ListGroup.Item>
                            <ListGroup.Item>Email : {this.state.searchresults.email}</ListGroup.Item>
                            <ListGroup.Item>Gender : {this.state.searchresults.gender}</ListGroup.Item>
                        </ListGroup>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="warning" onClick={this.handleClose}>
                            Ok
                        </Button>
                    </Modal.Footer>

                </Modal>
            </div>

        )
    }

}

export default PatientsearchComponent
