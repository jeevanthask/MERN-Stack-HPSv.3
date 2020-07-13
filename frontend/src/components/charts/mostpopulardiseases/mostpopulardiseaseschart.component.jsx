import React from 'react'
import {Bubble, Doughnut, Polar} from 'react-chartjs-2';
import {Form} from "react-bootstrap";

class MostpopulardiseaseschartComponent extends React.Component {

    constructor() {
        super();

        this.state = {
            patients: [],

            Allergies: '',
            ColdsandFlu: '',
            Conjunctivitis: '',
            Diarrhea: '',
            Headaches: ''
        }
    }

    generateChartData = () => {
        return (
            {
                labels: ['Allergies', 'ColdsandFlu', 'Conjunctivitis', 'Diarrhea', 'Headaches'],
                datasets: [
                    {
                        label: 'symptoms cha later',
                        data: [
                            81,
                            19,
                            34, 45, 80
                        ],
                        backgroundColor: [
                            '#33691e',
                            '#ff9800',
                            '#0091ea',
                            '#76ff03',
                            '#f50057'

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

                        <h4>Most Popular Disesases</h4>

                        <Polar
                            data={this.generateChartData()}
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
