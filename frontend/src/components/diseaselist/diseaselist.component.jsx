import React from "react";
import axios from 'axios'
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import DiseasesearchComponent from "../specificsearch/diseasesearch/diseasesearch.component";

class DiseaselistComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            diseases: []
        }
    }

    deleteDisease = (id) => {

        axios.delete('http://localhost:4000/HPSvthree/admin/deletedisease/' + id)
            .then(res => console.log(res.data))

        window.location.reload(false);

    }

    componentDidMount() {
        axios.get('http://localhost:4000/HPSvthree/admin/getdiseases')
            .then(response => {
                this.setState({
                    diseases: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    diseaseList = () => {
        return this.state.diseases.map(currentdisease => {
            return (
                <tr className="text-center">
                    <td>{currentdisease.firstname}</td>
                    <td>{currentdisease.lastname}</td>
                    <td>{currentdisease.description}</td>
                    <td><Link to={"/admin/updatedisease/" + currentdisease._id}><i
                        className="fa fa-pencil-square-o btn btn-primary" aria-hidden="true"/></Link></td>
                    <td>
                        <i className="fa fa-trash btn btn-danger " aria-hidden="true"
                           onClick={() => this.deleteDisease(currentdisease._id)}/>
                    </td>
                </tr>
            )
        })
    }

    render() {

        return (
            <div className="container" style={{marginTop: '2rem'}}>

                <div className="row">
                    <div className="col-md-12">
                        <DiseasesearchComponent/>
                    </div>
                </div>

                <div style={{marginTop: '3rem'}}>
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
                            this.diseaseList()
                        }

                        </tbody>
                    </Table>
                </div>


            </div>
        )
    }
}


export default DiseaselistComponent
