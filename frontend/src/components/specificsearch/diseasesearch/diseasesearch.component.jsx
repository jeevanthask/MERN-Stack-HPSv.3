import React from "react";
import style from './diseasesearch.module.css'

class DiseasesearchComponent extends React.Component {

    render() {
        return (
            <div className={style.containernew}>
                <input type="text" placeholder="Search..."/>
                <div className={style.search}></div>
            </div>
        )
    }

}

export default DiseasesearchComponent
