import React from 'react'
import {Pie} from 'react-chartjs-2';

class PatientsgenderchartComponent extends React.Component {

    constructor() {
        super();

        this.state = {
            chartData: {
                labels: ['Male', 'Female'],
                datasets: [
                    {
                        label: 'gender patients',
                        data: [
                            81,
                            19
                        ],
                        backgroundColor: [
                            '#33691e',
                            '#ff9800',

                        ],
                        borderColor: [
                        ],
                        borderWidth: 0
                    }
                ]
            }
        }
    }

    render() {
        return (
            <div style={{marginTop: 15}}>
                <div className="text-center p-3" style={{backgroundColor: '#FFFFFF'}}>
                    <h4>gender patients</h4>
                    <Pie
                        data={this.state.chartData}
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

        )
    }
}

export default PatientsgenderchartComponent
