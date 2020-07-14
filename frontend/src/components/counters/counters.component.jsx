import React from "react";
import PatientcounterComponent from "./patientcounter.component";
import DoctorcounterComponent from "./doctorcounter.component";
import SymptomscountComponent from "./symptomscount.component";

class CountersComponent extends React.Component {
    render() {
        return (
            <div className="container" style={{marginBottom:'2rem'}}>
                <div className="row">

                    <div className="col-md-4 ">
                        <PatientcounterComponent/>
                    </div>

                    <div className="col-md-4">
                        <DoctorcounterComponent/>
                    </div>

                    <div className="col-md-4">
                        <SymptomscountComponent/>
                    </div>

                </div>
            </div>
        )
    }
}

export default CountersComponent
