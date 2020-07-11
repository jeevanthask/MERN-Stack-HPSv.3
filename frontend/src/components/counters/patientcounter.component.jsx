import React from "react";
import CountUp from 'react-countup';
import {Card} from "react-bootstrap";

class PatientcounterComponent extends React.Component {

    constructor() {
        super();
        this.state = {}
    }


    render() {

        return (
            <div>

                <Card bg="primary" border="primary" style={{width: '18rem'}}>
                    <Card.Header className="text-center"><h5>Patients Count</h5></Card.Header>
                    <Card.Body>
                        <Card.Title className="text-center">
                            <CountUp start={0}
                                     end={50}
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
