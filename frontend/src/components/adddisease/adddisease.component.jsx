import React from "react";
import style from './adddisease.module.css'
import axios from 'axios'
import {Button, Modal, Form} from "react-bootstrap";

class AdddiseaseComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            show: false,
            firstname: '',
            lastname: '',
            description: ''
        }
    }

    handleShow = () => {
        this.setState({
            show: true
        })
    };

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    onChangeFirstName = (e) => {
        this.setState({
            firstname: e.target.value
        })
    }

    onChangeLastName = (e) => {
        this.setState({
            lastname: e.target.value
        })
    }

    onChangeDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        this.setState({
            show: false
        })

        const newDisease = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            description: this.state.description
        }

        axios.post('http://localhost:4000/HPSvthree/admin/adddisease', newDisease)
            .then(res => console.log(res.data))

        this.setState({
            firstname: '',
            lastname: '',
            description: ''
        })

    }

    render() {
        return (
            <div>
                <Button variant="danger" className={style.buttonstyle} onClick={this.handleShow}>
                    Add Disease
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>

                    <Modal.Header closeButton className={style.modalheader}>
                        <Modal.Title>Add Disease</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <Form onSubmit={this.onSubmit}>
                            <Form.Group>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" onChange={this.onChangeFirstName}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" onChange={this.onChangeLastName}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" onChange={this.onChangeDescription}/>
                            </Form.Group>

                            <Modal.Footer>
                                <Button variant="primary" type="submit" className={style.buttonstyle}>
                                    Add Disease
                                </Button>
                            </Modal.Footer>

                        </Form>

                    </Modal.Body>


                </Modal>
            </div>
        )
    }

}

export default AdddiseaseComponent
