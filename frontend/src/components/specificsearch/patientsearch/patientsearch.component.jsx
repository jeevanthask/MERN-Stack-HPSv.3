import React from "react";
import style from './patientsearch.module.css'
import axios from "axios";

class PatientsearchComponent extends React.Component {
    
    constructor() {
        super();
        this.state = {
            patients:[],
            searchitem:''
        }
    }

    onChangeSearchInput = (e) => {
        this.setState({
            searchitem:e.target.value
        })
    }

    handleSearchClick = () =>{

        let obj = this.state.patients.find(o => o.firstname === this.state.searchitem);

        alert(obj.lastname)
    }

    componentDidMount() {
        axios.get('http://localhost:4000/HPSvthree/admin/getpatients')
            .then(response => {
                this.setState({
                    patients: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div className={style.containernew}>
                <input type="text" placeholder="Search..." onChange={this.onChangeSearchInput}/>
                <div className={style.search} onClick={this.handleSearchClick}></div>
            </div>
        )
    }

}

export default PatientsearchComponent
