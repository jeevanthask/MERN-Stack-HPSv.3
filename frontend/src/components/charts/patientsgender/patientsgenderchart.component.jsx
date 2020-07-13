import React from 'react'
import {Pie} from 'react-chartjs-2';
import axios from "axios";

class PatientsgenderchartComponent extends React.Component {

    constructor() {
        super();

        this.state = {
            patients: [],

            male:0,
            female:0
        }
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

    processMaximumSpeciality = () => {

        for (let i = 0; i < this.state.patients.length; i++) {

            console.log(this.state.patients[i].gender)
            switch (this.state.patients[i].gender) {

                case "Male":
                    this.setState({
                        male: ++this.state.male
                    })
                    break;

                case "Female":
                    this.setState({
                        female: ++this.state.female
                    })
                    break;
            }
        }

    }


    generateChartData = () => {
        return (
            {
                labels: ['Male', 'Female'],
                datasets: [
                    {
                        label: 'gender patients',
                        data: [
                            this.state.male,
                            this.state.female
                        ],
                        backgroundColor: [
                            '#E91E63',
                            '#FFFF00',
                        ],
                        borderColor: [],
                        borderWidth: 0
                    }
                ]
            }
        )
    }


    render() {
        return (
            <div style={{marginTop: 15}}>
                <div className="text-center p-3">

                    <div className="alert alert-primary" role="alert">
                        <h4>Gender Analyse</h4>
                        <Pie
                            data={this.generateChartData}
                            options={{
                                title: {
                                    display: true,
                                    text: '',
                                    fontSize: 25
                                },
                                legend: {
                                    display: true,
                                    position: 'right'
                                },
                                scales: {
                                    yAxes: [{
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'value'
                                        }
                                    }],
                                    xAxes: [{
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'Gender'
                                        }
                                    }]
                                }

                            }}
                        />

                        <div className="row" style={{marginTop: '1rem'}}>
                            <div className="col-md-12">
                                <button className="btn btn-primary" onClick={this.processMaximumSpeciality}>Process
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        )
    }
}

export default PatientsgenderchartComponent
