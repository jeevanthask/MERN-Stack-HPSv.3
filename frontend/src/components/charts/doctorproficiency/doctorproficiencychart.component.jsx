import React from 'react'
import {Bar, Bubble, Line, Pie, Polar, Radar} from 'react-chartjs-2';

class DoctorproficiencychartComponent extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            chartData:{
                labels:['Colombo','Kalutara','Gampaha','Puttalam','Jaffna',],
                datasets:[
                    {
                        label:'populattion',
                        data:[155,63,41,39,16],
                        backgroundColor:[
                            '#f50057',
                            '#ff6d00',
                            '#33691e',
                            '#0091ea',
                            '#76ff03'
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
        return(
            <div style={{marginTop: 15}}>
                <div className="text-center p-3">
                    <div className="alert alert-success" role="alert">
                        <h4>Doctor Proficiency</h4>
                        <Bar
                            data={this.state.chartData}
                            options={{
                                title:{
                                    display:true,
                                    text:'',
                                    fontSize:25
                                },
                                legend:{
                                    display: true,
                                    position:'right'
                                }

                            }}
                        />
                    </div>

                </div>
            </div>
        )
    }
}

export default DoctorproficiencychartComponent
