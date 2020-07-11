import React from "react";
import {Tabs,Tab} from "react-bootstrap";
import DoctorproficiencychartComponent from "../doctorproficiency/doctorproficiencychart.component";
import MostpopulardiseaseschartComponent from "../mostpopulardiseases/mostpopulardiseaseschart.component";
import PatientsgenderchartComponent from "../patientsgender/patientsgenderchart.component";
import PopularsymptomschartComponent from "../popularsymptoms/popularsymptomschart.component";

class ChartrenderComponent extends React.Component{

    render() {
        return(
            <div className="container" style={{marginTop:'5rem'}}>

                <div className="alert alert-light" role="alert">

                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab eventKey="doctorproficiency" title="doctorproficiency">
                            <div>
                                <DoctorproficiencychartComponent/>
                            </div>
                        </Tab>
                        <Tab eventKey="mostpopulardisese" title="mostpopulardisese">
                            <div>
                                <MostpopulardiseaseschartComponent/>
                            </div>
                        </Tab>
                        <Tab eventKey="patientsgender" title="patients gender">
                            <div>
                                <PatientsgenderchartComponent/>
                            </div>
                        </Tab>
                        <Tab eventKey="popular sympotoms" title="popular symptoms">
                            <div>
                                <PopularsymptomschartComponent/>
                            </div>
                        </Tab>
                    </Tabs>

                </div>




            </div>

        )
    }

}



export default ChartrenderComponent
