import React from "react";
import CountUp from 'react-countup';

class PatientcounterComponent extends React.Component {

    constructor() {
        super();
        this.state = {}
    }


    render() {

        return (
            <div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card text-white bg-warning mb-3">
                            <div className="card-header text-center"><h6>Patients Count</h6></div>
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

export default PatientcounterComponent
