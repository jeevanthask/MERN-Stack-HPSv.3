import React from "react";
import axios from 'axios'
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";

class DoctorlistComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            doctors: []
        }
    }

    deleteDoctor = (id) => {

        axios.delete('http://localhost:4000/HPSvthree/admin/deletedoctor/' + id)
            .then(res => console.log(res.data))

        window.location.reload(false);

    }

    componentDidMount() {
        axios.get('http://localhost:4000/HPSvthree/admin/getdoctors')
            .then(response => {
                this.setState({
                    doctors: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    doctorList = () => {
        return this.state.doctors.map(currentdoctor => {
            return (
                <tr className="text-center">
                    <td>{currentdoctor.firstname}</td>
                    <td>{currentdoctor.lastname}</td>
                    <td>{currentdoctor.email}</td>
                    <td><Link to={"/admin/updatedoctor/" + currentdoctor._id}><i
                        className="fa fa-pencil-square-o btn btn-primary m-2" aria-hidden="true"></i></Link></td>
                    <td>
                        <i className="fa fa-trash btn btn-danger " aria-hidden="true"
                           onClick={() => this.deleteDoctor(currentdoctor._id)}></i>
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
                        this.doctorList()
                    }

                    </tbody>
                </Table>
            </div>
        )
    }
}


export default DoctorlistComponent
