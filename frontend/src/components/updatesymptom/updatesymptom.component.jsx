import React from "react";
import style from './updatesymptom.module.css'
import axios from 'axios'
import {Button, Modal, Form} from "react-bootstrap";

class UpdatesymptomComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            show: false,
            firstname: '',
            lastname: '',
            description: ''
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

    onChangeDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    componentDidMount() {
        axios.get('http://localhost:4000/HPSvthree/admin/getsymptom/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    firstname: response.data.firstname,
                    lastname: response.data.lastname,
                    description: response.data.description
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

        const newSymptom = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            description: this.state.description
        }

        axios.post('http://localhost:4000/HPSvthree/admin/updatesymptom/' + this.props.match.params.id, newSymptom)
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
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={this.state.description} onChange={this.onChangeDescription}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" className={style.buttonstyle}>
                        Update Symptom
                    </Button>

                </Form>
            </div>
        )
    }

}

export default UpdatesymptomComponent
