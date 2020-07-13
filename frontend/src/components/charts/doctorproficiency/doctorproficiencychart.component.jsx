import React from 'react'
import {Bar, Bubble, Line, Pie, Polar, Radar} from 'react-chartjs-2';
import axios from "axios";

class DoctorproficiencychartComponent extends React.Component {

    constructor() {
        super();

        this.state = {
            doctors: [],

            Pediatrician: 0,
            Obstetrician: 0,
            Surgeon: 0,
            Psychiatrist: 0,
            Cardiologist: 0,
            Dermatologist: 0,
            Endocrinologist: 0,
            Gastroenterologist: 0,
            Nephrologist: 0,
            Ophthalmologist: 0

        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/HPSvthree/admin/getdoctors')
            .then(response => {
                this.setState({
                    doctors: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    generateChartData = () => {
        return (
            {
                labels: [
                    'Pediatrician', 'Obstetrician', 'Surgeon', 'Psychiatrist', 'Cardiologist',
                    'Dermatologist', 'Endocrinologist', 'Gastroenterologist', 'Nephrologist', 'Ophthalmologist'
                ],
                datasets: [
                    {
                        label: 'Speciality',
                        data: [
                            this.state.Pediatrician,
                            this.state.Obstetrician,
                            this.state.Surgeon,
                            this.state.Psychiatrist,
                            this.state.Cardiologist,
                            this.state.Dermatologist,
                            this.state.Endocrinologist,
                            this.state.Gastroenterologist,
                            this.state.Nephrologist,
                            this.state.Ophthalmologist
                        ],
                        backgroundColor: [
                            '#f50057',
                            '#ff6d00',
                            '#33691e',
                            '#0091ea',
                            '#76ff03',
                            '#f50057',
                            '#ff6d00',
                            '#33691e',
                            '#0091ea',
                            '#76ff03'
                        ],
                        borderColor: [],
                        borderWidth: 0
                    }
                ]
            }
        )
    }


    processMaximumSpeciality = () => {

        let count = this.state.doctors.length
        console.log(count)

        for (let i = 0; i < this.state.doctors.length; i++) {
            console.log(this.state.doctors[i].speciality)
            switch (this.state.doctors[i].speciality) {

                case "Pediatrician":
                    this.setState({
                        Pediatrician: ++this.state.Pediatrician
                    })
                    break;

                case "Obstetrician":
                    this.setState({
                        Obstetrician: ++this.state.Obstetrician
                    })
                    break;

                case "Surgeon":
                    this.setState({
                        Surgeon: ++this.state.Surgeon
                    })
                    break;

                case "Psychiatrist":
                    this.setState({
                        Psychiatrist: ++this.state.Psychiatrist
                    })
                    break;

                case "Cardiologist":
                    this.setState({
                        Cardiologist: ++this.state.Cardiologist
                    })
                    break;

                case "Dermatologist":
                    this.setState({
                        Dermatologist: ++this.state.Dermatologist
                    })
                    break;

                case "Endocrinologist":
                    this.setState({
                        Endocrinologist: ++this.state.Endocrinologist
                    })
                    break;

                case "Gastroenterologist":
                    this.setState({
                        Gastroenterologist: ++this.state.Gastroenterologist
                    })
                    break;

                case "Nephrologist":
                    this.setState({
                        Nephrologist: ++this.state.Nephrologist
                    })
                    break;

                case "Ophthalmologist":
                    this.setState({
                        Ophthalmologist: ++this.state.Ophthalmologist
                    })
                    break;

            }
        }

    }

    render() {
        return (
            <div style={{marginTop: 15}}>
                <div className="text-center p-3">
                    <div className="alert alert-success" role="alert">
                        <h4>Doctor Proficiency</h4>
                        <Bar
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

export default DoctorproficiencychartComponent
