import React from 'react'
import {Doughnut} from 'react-chartjs-2';
import axios from "axios";

class PopularsymptomschartComponent extends React.Component {

    constructor() {
        super();

        this.state = {
            symptoms: [],

            Flu: 0,
            AbdominalPain: 0,
            ArmPain: 4,
            BackPain: 5,
            BodyAches: 0
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/HPSvthree/admin/getsymptoms')
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

        for (let i = 0; i < this.state.symptoms.length; i++) {

            switch (this.state.symptoms[i].fistname) {

                case "Flu":
                    this.setState({
                        Flu: ++this.state.Flu
                    })
                    break;

                case "AbdominalPain":
                    this.setState({
                        AbdominalPain: ++this.state.AbdominalPain
                    })
                    break;

                case "Arm Pain":
                    this.setState({
                        ArmPain: ++this.state.ArmPain
                    })
                    break;

                case "Back Pain":
                    this.setState({
                        BackPain: ++this.state.BackPain
                    })
                    break;

                case "Body Aches":
                    this.setState({
                        BodyAches: ++this.state.BodyAches
                    })
                    break;
            }
        }

    }


    getChartData = () => {
        return (
            {
                labels: ['Flu', 'Abdominal Pain','Arm Pain','Back Pain','Body Aches'],
                datasets: [
                    {
                        label: 'symptoms cha later',
                        data: [
                            this.state.Flu,
                            this.state.AbdominalPain,
                            this.state.ArmPain,
                            this.state.BackPain,
                            this.state.BodyAches
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

                        <h4>Symptoms Analysis</h4>

                        <Doughnut
                            data={this.getChartData()}
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

export default PopularsymptomschartComponent
