import React from 'react'
import {Bubble, Doughnut, Polar} from 'react-chartjs-2';
import {Form} from "react-bootstrap";
import axios from "axios";

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

            switch (this.state.patients[i].disease) {

                case "Allergies":
                    this.setState({
                        Allergies: ++this.state.Allergies
                    })
                    break;

                case "Colds and Flu":
                    this.setState({
                        ColdsandFlu: ++this.state.ColdsandFlu
                    })
                    break;

                case "Conjunctivitis":
                    this.setState({
                        Conjunctivitis: ++this.state.Conjunctivitis
                    })
                    break;

                case "Diarrhea":
                    this.setState({
                        Diarrhea: ++this.state.Diarrhea
                    })
                    break;

                case "Headaches":
                    this.setState({
                        Headaches: ++this.state.Headaches
                    })
                    break;
            }
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
                            this.state.Allergies,
                            this.state.ColdsandFlu,
                            this.state.Conjunctivitis,
                            this.state.Diarrhea,
                            this.state.Headaches
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

                        <Doughnut
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
                                            labelString: 'Diseases'
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

export default MostpopulardiseaseschartComponent
