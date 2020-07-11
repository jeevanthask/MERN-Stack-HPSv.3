import React from 'react'
import {Bubble, Doughnut, Polar} from 'react-chartjs-2';

class MostpopulardiseaseschartComponent extends React.Component {

    constructor() {
        super();

        this.state = {
            chartData: {
                labels: ['Male', 'Female'],
                datasets: [
                    {
                        label: 'symptoms cha later',
                        data: [
                            81,
                            19,
                            34,45,56,67
                        ],
                        backgroundColor: [
                            '#33691e',
                            '#ff9800',
                            '#33691e',
                            '#0091ea',
                            '#76ff03',
                            '#f50057'

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
                <div className="text-center p-3">

                    <div className="alert alert-primary" role="alert">

                        <h4>Most popular Disesases</h4>

                        <Polar
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
            </div>

        )
    }
}

export default MostpopulardiseaseschartComponent
