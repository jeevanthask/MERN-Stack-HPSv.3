import React from "react";
import style from './mainheading.module.css'

class MainheadingComponent extends React.Component{

    render() {
        return(
            <div>
                <span className={style.headingspan}>Health Prediction System</span>
            </div>
        )
    }

}

export default MainheadingComponent
