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
                <tr className="text-center">
                    <td>{currentsymptom.firstname}</td>
                    <td>{currentsymptom.lastname}</td>
                    <td>{currentsymptom.description}</td>
                    <td><Link to={"/admin/updatesymptom/" + currentsymptom._id}><i
                        className="fa fa-pencil-square-o btn btn-primary m-2" aria-hidden="true"></i></Link></td>
                    <td>
                        <i className="fa fa-trash btn btn-danger " aria-hidden="true"
                           onClick={() => this.deleteSymptom(currentsymptom._id)}></i>
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
