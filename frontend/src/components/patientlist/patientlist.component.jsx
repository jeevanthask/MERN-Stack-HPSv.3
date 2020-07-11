import React from "react";
import axios from 'axios'
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";

class PatientlistComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            patients: []
        }
    }

    deletePatient = (id) => {

        axios.delete('http://localhost:4000/HPSvthree/admin/deletepatient/' + id)
            .then(res => console.log(res.data))

        window.location.reload(false);

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

    patientList = () => {
        return this.state.patients.map(currentpatient => {
            return (
                <tr className="text-center">
                    <td>{currentpatient.firstname}</td>
                    <td>{currentpatient.lastname}</td>
                    <td>{currentpatient.email}</td>
                    <td><Link to={"/admin/updatepatient/" + currentpatient._id}><i
                        className="fa fa-pencil-square-o btn btn-primary m-2" aria-hidden="true"></i></Link></td>
                    <td>
                        <i className="fa fa-trash btn btn-danger " aria-hidden="true"
                           onClick={() => this.deletePatient(currentpatient._id)}></i>
                    </td>
                </tr>
            )
        })
    }

    render() {

        return (
            <div className="container" style={{marginTop: '2rem'}}>
                <Table striped bordered hover variant="primary">
                    <thead>
                    <tr className="text-center">
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        this.patientList()
                    }

                    </tbody>
                </Table>
            </div>
        )
    }
}


export default PatientlistComponent
