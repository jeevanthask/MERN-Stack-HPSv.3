import React from "react";
import CountUp from 'react-countup';
import {Card} from "react-bootstrap";
import axios from "axios";

class DoctorcounterComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            doctors:[]
        }
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

    render() {
        return (
            <div className="container">

                <Card bg="warning" border="warning" style={{width: '18rem'}}>
                    <Card.Header className="text-center"><h5>Doctors Count</h5></Card.Header>
                    <Card.Body>
                        <Card.Title className="text-center">
                            <CountUp start={0}
                                     end={this.state.doctors.length}
                                     duration={15} separator=","
                            />
                        </Card.Title>
                    </Card.Body>
                </Card>


            </div>
        )
    }
}

export default DoctorcounterComponent
