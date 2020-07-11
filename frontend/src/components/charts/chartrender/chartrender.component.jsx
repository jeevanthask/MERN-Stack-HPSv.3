import React from "react";
import {Tabs, Tab} from "react-bootstrap";
import DoctorproficiencychartComponent from "../doctorproficiency/doctorproficiencychart.component";
import MostpopulardiseaseschartComponent from "../mostpopulardiseases/mostpopulardiseaseschart.component";
import PatientsgenderchartComponent from "../patientsgender/patientsgenderchart.component";
import PopularsymptomschartComponent from "../popularsymptoms/popularsymptomschart.component";

class ChartrenderComponent extends React.Component {

    render() {
        return (
            <div className="container" style={{marginTop: '5rem'}}>

                <div className="alert alert-danger" role="alert">

                    <Tabs defaultActiveKey="profile">

                        <Tab eventKey="doctorproficiency" title="Doctor Proficiency">
                            <div>
                                <DoctorproficiencychartComponent/>
                            </div>
                        </Tab>

                        <Tab eventKey="mostpopulardisese" title="Popular Diseases">
                            <div>
                                <MostpopulardiseaseschartComponent/>
                            </div>
                        </Tab>

                        <Tab eventKey="patientsgender" title="Patients vs Gender">
                            <div>
                                <PatientsgenderchartComponent/>
                            </div>
                        </Tab>

                        <Tab eventKey="popularsympotoms" title="Popular symptoms">
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
