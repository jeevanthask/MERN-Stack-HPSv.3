import React from "react";
import style from './addpatient.module.css'
import {Button, Modal, Form} from "react-bootstrap";

class AddpatientComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            show: false
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

    onSubmit = (e) => {
        e.preventDefault()

        this.setState({
            show:false
        })
    }

    render() {
        return (
            <div>
                <Button variant="primary" className={style.buttonstyle} onClick={this.handleShow}>
                    Add Patient
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>

                    <Modal.Header closeButton>
                        <Modal.Title>Add Student</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <Form onSubmit={this.onSubmit}>
                            <Form.Group>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>

                            <Modal.Footer>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Modal.Footer>

                        </Form>

                    </Modal.Body>


                </Modal>
            </div>
        )
    }

}

export default AddpatientComponent
