import React from "react";
import CountUp from 'react-countup';
import {Card} from "react-bootstrap";
import axios from "axios";

class SymptomscountComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            symptoms:[]
        }
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

    render() {

        return (
            <div className="container">

                <Card bg="danger" border="danger" style={{width: '18rem'}}>
                    <Card.Header className="text-center"><h5>Symptoms Count</h5></Card.Header>
                    <Card.Body>
                        <Card.Title className="text-center">
                            <CountUp start={0}
                                     end={this.state.symptoms.length}
                                     duration={15} separator=","
                            />
                        </Card.Title>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}

export default SymptomscountComponent
