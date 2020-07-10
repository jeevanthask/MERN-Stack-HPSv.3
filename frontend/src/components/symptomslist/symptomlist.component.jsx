import React from "react";
import axios from 'axios'
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";

class SymptomlistComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            symptoms: []
        }
    }

    deleteSymptom = (id) => {

        axios.delete('http://localhost:4000/HPSvthree/admin/deletesymptom/' + id)
            .then(res => console.log(res.data))

        window.location.reload(false);

    }

    componentDidMount() {
        axios.get('http://localhost:4000/HPSvthree/admin/getsymptoms')
            .then(response => {
                this.setState({
                    symptoms: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    symptomList = () => {
        return this.state.symptoms.map(currentsymptom => {
            return (
                <tr>
                    <td>{currentsymptom.firstname}</td>
                    <td>{currentsymptom.lastname}</td>
                    <td>{currentsymptom.description}</td>
                    <td><Link to={"/admin/updatesymptom/" + currentsymptom._id}>Edit</Link></td>
                    <td>
                        <button className="btn btn-danger" onClick={() => this.deleteSymptom(currentsymptom._id)}>
                            Delete
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {

        return (
            <div className="container" style={{marginTop: '2rem'}}>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        this.symptomList()
                    }

                    </tbody>
                </Table>
            </div>
        )
    }
}


export default SymptomlistComponent
