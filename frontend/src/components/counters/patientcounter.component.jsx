import React from "react";
import CountUp from 'react-countup';
import {Card} from "react-bootstrap";
import axios from "axios";

class PatientcounterComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            patients:[]
        }
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

    render() {

        return (
            <div className="container">

                <Card bg="primary" border="primary" style={{width: '18rem'}}>
                    <Card.Header className="text-center"><h5>Patients Count</h5></Card.Header>
                    <Card.Body>
                        <Card.Title className="text-center">
                            <CountUp start={0}
                                     end={this.state.patients.length}
                                     duration={15} separator=","
                            />
                        </Card.Title>
                    </Card.Body>
                </Card>


            </div>
        )
    }
}

export default PatientcounterComponent
