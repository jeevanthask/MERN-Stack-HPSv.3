import React from "react";
import style from './dashboard.module.css'
import AddpatientComponent from "../addpatient/addpatient.component";


class DashboardComponent extends React.Component{

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <span className={style.headingspan}>Health Prediction Sytem</span>
                    </div>
                </div>


                <AddpatientComponent/>
            </div>
        )
    }

}

export default DashboardComponent
