import React from "react";
import style from './patientsearch.module.css'

class PatientsearchComponent extends React.Component {

    render() {
        return (
            <div className={style.containernew}>
                <input type="text" placeholder="Search..."/>
                <div className={style.search}></div>
            </div>
        )
    }

}

export default PatientsearchComponent
