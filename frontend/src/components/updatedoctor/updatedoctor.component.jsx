import React from "react";
import style from './updatedoctor.module.css'
import axios from 'axios'
import {Button, Form} from "react-bootstrap";

class UpdatedoctorComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            speciality: ''
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

    onChangeSpeciality = (e) => {
        this.setState({
            speciality: e.target.value
        })
    }

    componentDidMount() {
        axios.get('http://localhost:4000/HPSvthree/admin/getdoctor/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    firstname: response.data.firstname,
                    lastname: response.data.lastname,
                    email: response.data.email,
                    speciality: response.data.speciality
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
            email: this.state.email,
            speciality: this.state.speciality
        }

        axios.post('http://localhost:4000/HPSvthree/admin/updatedoctor/' + this.props.match.params.id, newDoctor)
            .then(res => console.log(res.data))

        this.setState({
            firstname: '',
            lastname: '',
            email: '',
            speciality: ''
        })

    }

    render() {
        return (
            <div className="container">
                <Form onSubmit={this.onSubmit} className={style.formstyle}>

                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" className={style.textboxstyle} value={this.state.firstname}
                                      onChange={this.onChangeFirstName}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" className={style.textboxstyle} value={this.state.lastname}
                                      onChange={this.onChangeLastName}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" className={style.textboxstyle} value={this.state.email}
                                      onChange={this.onChangeEmail}/>
                    </Form.Group>

                    <Form.Control as="select" defaultValue="Choose..." onChange={this.onChangeSpeciality}
                                  value={this.state.speciality}>
                        <option>Choose...</option>
                        <option>Pediatrician</option>
                        <option>Obstetrician/Gynecologist (OB/GYN)</option>
                        <option>Surgeon</option>
                        <option>Psychiatrist</option>
                        <option>Cardiologist</option>
                        <option>Dermatologist</option>
                        <option>Endocrinologist</option>
                        <option>Gastroenterologist</option>
                        <option>Nephrologist</option>
                        <option>Ophthalmologist</option>
                    </Form.Control>

                    <Button variant="primary" type="submit" className={style.buttonstyle}>
                        Update Doctor
                    </Button>

                </Form>
            </div>
        )
    }

}

export default UpdatedoctorComponent
