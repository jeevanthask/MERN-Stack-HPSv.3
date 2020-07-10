import React from "react";
import CountUp from 'react-countup';

class PatientcounterComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            totalcount: 50
        }
    }


    render() {

        const {totalcount} = this.state
        return (
            <div className="p-3" style={{backgroundColor: '#FFFFFF'}}>

                <h4 className="text-center">Local Cases</h4>

                <div className="row" style={{marginTop: 15}}>
                    <div className="col-md-4">
                        <div className="card text-white bg-primary mb-3">
                            <div className="card-header text-center"><h4>Total Cases</h4></div>
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    <CountUp start={0}
                                             end={50}
                                             duration={15} separator=","/>
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
