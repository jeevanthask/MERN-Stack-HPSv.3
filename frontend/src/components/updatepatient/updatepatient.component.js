import React from "react";
import style from './updatepatient.module.css'
import axios from 'axios'
import {Button, Modal, Form} from "react-bootstrap";

class UpdatepatientComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            show: false,
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
        axios.get('http://localhost:4000/HPSvthree/admin/getpatient/' + this.props.match.params.id)
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

        this.setState({
            show: false
        })

        const newPatient = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email
        }

        axios.post('http://localhost:4000/HPSvthree/admin/updatepatient/' + this.props.match.params.id, newPatient)
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

                    <Button variant="primary" type="submit">
                        Update Patient
                    </Button>

                </Form>
            </div>
        )
    }

}

export default UpdatepatientComponent
