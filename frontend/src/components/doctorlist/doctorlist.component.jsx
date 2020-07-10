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
                <tr>
                    <td>{currentdoctor.firstname}</td>
                    <td>{currentdoctor.lastname}</td>
                    <td>{currentdoctor.email}</td>
                    <td><Link to={"/admin/updatedoctor/" + currentdoctor._id}>Edit</Link></td>
                    <td>
                        <button className="btn btn-danger" onClick={() => this.deleteDoctor(currentdoctor._id)}>
                            Delete
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {

        return (
            <div  className="container" style={{marginTop:'2rem'}}>
                <Table striped bordered hover>
                    <thead>
                    <tr>
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
