import React from 'react'
import {Pie} from 'react-chartjs-2';

class PatientsgenderchartComponent extends React.Component {

    constructor() {
        super();

        this.state = {
            patients: [],

            male:0,
            female:0
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
                            60,
                            40
                        ],
                        backgroundColor: [
                            '#33691e',
                            '#ff9800',
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
                        <h4>gender patients</h4>
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
                                            labelString: 'calculated in percentage %'
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
                    </div>

                </div>
            </div>

        )
    }
}

export default PatientsgenderchartComponent
