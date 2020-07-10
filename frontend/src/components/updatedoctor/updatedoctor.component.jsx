import React from "react";
import style from './updatedoctor.module.css'
import axios from 'axios'
import {Button, Modal, Form} from "react-bootstrap";

class UpdatedoctorComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            email: ''
        }
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

    componentDidMount() {
        axios.get('http://localhost:4000/HPSvthree/admin/getdoctor/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    firstname: response.data.firstname,
                    lastname: response.data.lastname,
                    email:response.data.email
                })
            })
            .catch(function (error) {
                console.log(error);

            })
    }

    onSubmit = (e) => {
        e.preventDefault()


        const newDoctor = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email
        }

        axios.post('http://localhost:4000/HPSvthree/admin/updatedoctor/' + this.props.match.params.id, newDoctor)
            .then(res => console.log(res.data))

        this.setState({
            firstname: '',
            lastname: '',
            email: ''
        })

    }

    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>

                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" value={this.state.firstname} onChange={this.onChangeFirstName}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" value={this.state.lastname} onChange={this.onChangeLastName}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={this.state.email} onChange={this.onChangeEmail}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" className = {style.buttonstyle}>
                        Update Doctor
                    </Button>

                </Form>
            </div>
        )
    }

}

export default UpdatedoctorComponent
