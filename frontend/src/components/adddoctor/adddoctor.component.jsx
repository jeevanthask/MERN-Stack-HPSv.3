import React from "react";
import style from './adddoctor.module.css'
import axios from 'axios'
import {Button, Modal, Form} from "react-bootstrap";

class AdddoctorComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            show: false,
            firstname: '',
            lastname: '',
            email: '',
            speciality: ''
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

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    onChangeSpeciality = (e) => {
        this.setState({
            speciality: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        console.log(this.state.speciality)

        this.setState({
            show: false
        })

        const newDoctor = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            speciality:this.state.speciality
        }

        axios.post('http://localhost:4000/HPSvthree/admin/adddoctor', newDoctor)
            .then(res => console.log(res.data))

        this.setState({
            firstname: '',
            lastname: '',
            email: '',
            speciality:''
        })

    }

    render() {
        return (
            <div>
                <Button variant="primary" className={style.buttonstyle} onClick={this.handleShow}>
                    Add Doctor
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>

                    <Modal.Header closeButton className={style.modalheader}>
                        <Modal.Title>Add Doctor</Modal.Title>
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
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" onChange={this.onChangeEmail}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Speciality</Form.Label>
                                <Form.Control as="select" defaultValue="Choose..." onChange={this.onChangeSpeciality}>
                                    <option>Choose...</option>
                                    <option>Pediatrician</option>
                                    <option>Obstetrician</option>
                                    <option>Surgeon</option>
                                    <option>Psychiatrist</option>
                                    <option>Cardiologist</option>
                                    <option>Dermatologist</option>
                                    <option>Endocrinologist</option>
                                    <option>Gastroenterologist</option>
                                    <option>Nephrologist</option>
                                    <option>Ophthalmologist</option>
                                </Form.Control>
                            </Form.Group>

                            <Modal.Footer>
                                <Button variant="primary" type="submit" className={style.buttonstyle}>
                                    Add Doctor
                                </Button>
                            </Modal.Footer>

                        </Form>

                    </Modal.Body>


                </Modal>
            </div>
        )
    }

}

export default AdddoctorComponent
