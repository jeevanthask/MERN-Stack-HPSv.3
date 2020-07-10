import React from "react";
import style from './commonsearch.module.css'

class CommonsearchComponent extends React.Component {

    render() {
        return (
            <div className={style.containernew}>
                <input type="text" placeholder="Search..."/>
                <div className={style.search}></div>
            </div>
        )
    }

}

export default CommonsearchComponent
