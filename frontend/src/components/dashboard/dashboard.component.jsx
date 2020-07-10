import React from "react";
import style from './dashboard.module.css'
import {Button} from "react-bootstrap";
import AddpatientComponent from "../addpatient/addpatient.component";
import AdddoctorComponent from "../adddoctor/adddoctor.component";
import AddsymptomComponent from "../addsymptom/addsymptom.component";


class DashboardComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    handlePatientList = () => {
        this.props.history.push('/admin/patientlist')
    }

    handleDoctorList = () => {
        this.props.history.push('/admin/doctorlist')
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <span className={style.headingspan}>Health Prediction Sytem</span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <AddpatientComponent/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <AdddoctorComponent/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <AddsymptomComponent/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <Button variant="primary" className={style.buttonstyle} onClick={this.handlePatientList}>
                            Patient List
                        </Button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <Button variant="primary" className={style.buttonstyle} onClick={this.handleDoctorList}>
                            Doctor List
                        </Button>
                    </div>
                </div>


            </div>
        )
    }

}

export default DashboardComponent
