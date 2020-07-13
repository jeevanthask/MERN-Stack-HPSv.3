import React from "react";
import style from './addpatient.module.css'
import axios from 'axios'
import {Button, Modal, Form} from "react-bootstrap";

class AddpatientComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            show: false,
            firstname:'',
            lastname:'',
            email:'',
            gender:'',
            disease:''
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
            firstname:e.target.value
        })
    }

    onChangeLastName = (e) => {
        this.setState({
            lastname:e.target.value
        })
    }

    onChangeEmail = (e) => {
        this.setState({
            email:e.target.value
        })
    }

    onChangeGender = (e) =>{
        this.setState({
            gender:e.target.value
        })
    }

    onChangeDisease = (e) => {
        this.setState({
            disease:e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        this.setState({
            show:false
        })

        const newPatient = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email:this.state.email,
            gender:this.state.gender,
            disease:this.state.disease
        }

        axios.post('http://localhost:4000/HPSvthree/admin/addpatient',newPatient)
            .then(res => console.log(res.data))

        this.setState({
            firstname:'',
            lastname:'',
            email:'',
            gender:'',
            disease:''
        })

    }

    render() {
        return (
            <div>
                <Button variant="primary" className={style.buttonstyle} onClick={this.handleShow}>
                    Add Patient
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>

                    <Modal.Header closeButton className = {style.modalheader}>
                        <Modal.Title>Add Patient</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <Form onSubmit={this.onSubmit}>
                            <Form.Group>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" onChange = {this.onChangeFirstName}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" onChange = {this.onChangeLastName}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" onChange = {this.onChangeEmail}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Gender</Form.Label>
                                <Form.Control as="select" defaultValue="Choose..." onChange={this.onChangeGender}>
                                    <option>Choose...</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Disease</Form.Label>
                                <Form.Control as="select" defaultValue="Choose..." onChange={this.onChangeDisease}>
                                    <option>Choose...</option>
                                    <option>Allergies</option>
                                    <option>Colds and Flu</option>
                                    <option>Conjunctivitis</option>
                                    <option>Diarrhea</option>
                                    <option>Headaches</option>
                                    <option>Stomach Aches</option>
                                </Form.Control>
                            </Form.Group>

                            <Modal.Footer>
                                <Button variant="primary" type="submit" className = {style.buttonstyle}>
                                    Add Patient
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
