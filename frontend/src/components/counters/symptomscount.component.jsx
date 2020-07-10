import React from "react";
import CountUp from 'react-countup';
import {Card} from "react-bootstrap";

class SymptomscountComponent extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {

        return (
            <div>

                <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>Primary Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card text-white bg-danger mb-3">
                            <div className="card-header text-center"><h6>Symptoms Count</h6></div>
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    <CountUp start={0}
                                             end={50}
                                             duration={15} separator=","
                                    />
                                </h5>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        )
    }
}

export default SymptomscountComponent
